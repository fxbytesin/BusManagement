const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// List users by role with pagination and search
exports.getUsersByRole = async (req, res) => {
  try {
    const {
      search = "",
      limit = 10,
      page = 1,
      order = "ASC",
      orderColumn = "created_at"
    } = req.body; // 👉 if you're using GET, change this to req.query
 
    const take = Number(limit);
    const skip = (Number(page) - 1) * take;
 
    // ✅ Ensure valid sort order
    const sortOrder = order && order.toUpperCase() === "DESC" ? "desc" : "asc";
 
    // ✅ Allow only safe columns
    const validColumns = ["created_at", "name", "email", "phone"];
    const sortColumn = validColumns.includes(orderColumn) 
      ? orderColumn
      : "created_at";
 
    // ✅ Build search filter (all are String fields in your schema)
    const whereCondition = search
      ? {
          OR: [
            { name: { contains: search } },
            { phone: { contains: search } },
          ]
        }
      : {};
 
    console.log("whereCondition:", JSON.stringify(whereCondition, null, 2));
 
    // ✅ Fetch users
    const users = await prisma.user.findMany({
      where: whereCondition,
      include: { userExtra: true },
      orderBy: { [sortColumn]: sortOrder },
      skip,
      take
    });
 
    // ✅ Count total
    const totalCount = await prisma.user.count({ where: whereCondition });
 
    res.json({
      data: users,
      pagination: {
        total: totalCount,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(totalCount / take)
      }
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.createUser = async (req, res) => {
  try {
    const currentUserRole = req.user?.role; 
    console.log(currentUserRole,'currentUserRole')

    // Only admin can create users
    if (currentUserRole !== 'admin') {
      return res.status(403).json({ error: 'Only admin users can create new users.' });
    }

    const {
      name,
      phone,
      role, // Should be 'driver' or 'conductor'
      experience_years,
      address,
      emergency_contact,
      license_number,
      license_expiry
    } = req.body;

    // Restrict created roles
    if (!['driver', 'conductor'].includes(role)) {
      return res.status(400).json({ error: "Can only create users with role 'driver' or 'conductor'." });
    }

    // Required fields validation
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }

    // Phone uniqueness check
    const existingUser = await prisma.user.findUnique({ where: { phone } });
    if (existingUser) {
      return res.status(400).json({ error: 'Phone number already exists' });
    }

    // Driver-specific license checks
    if (role === 'driver') {
      if (!license_number) {
        return res.status(400).json({ error: 'License number is required for drivers' });
      }

      const licenseExists = await prisma.userExtra.findFirst({
        where: { license_number }
      });
      if (licenseExists) {
        return res.status(400).json({ error: 'License number already exists' });
      }
    }

    // Create user with is_verified true if created by admin
    const user = await prisma.user.create({
      data: {
        name,
        phone,
        role,
        is_verified: currentUserRole === 'admin', // auto verify
        userExtra: {
          create: {
            experience_years: experience_years || 0,
            address,
            emergency_contact,
            license_number: role === 'driver' ? license_number : null,
            license_expiry: role === 'driver' && license_expiry ? new Date(license_expiry) : null,
          }
        }
      },
      include: { userExtra: true }
    });

    res.status(201).json(user);

  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Update user and userExtra data
exports.updateUser = async (req, res) => {
  try {
    const currentUserRole = req.user?.role;  // get current user role from auth middleware
    const userId = parseInt(req.params.id);
    const {
      name,
      phone,
      experience_years,
      address,
      emergency_contact,
      license_number,
      license_expiry,
      active,
      is_verified  // optional, if admin can update verification status
    } = req.body;

    // Only admin can update users
    if (currentUserRole !== 'admin') {
      return res.status(403).json({ error: 'Only admin users can update users.' });
    }

    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { userExtra: true }
    });

    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Validate phone format and uniqueness if changed
    if (phone && phone !== existingUser.phone) {
      if (!/^[6-9]\d{9}$/.test(phone)) {
        return res.status(400).json({ error: 'Invalid phone number format' });
      }
      const phoneExists = await prisma.user.findUnique({ where: { phone } });
      if (phoneExists && phoneExists.id !== userId) {
        return res.status(400).json({ error: 'Phone number already exists' });
      }
    }

    // Driver-specific license number uniqueness validation
    if (existingUser.role === 'driver' && license_number && license_number !== existingUser.userExtra?.license_number) {
      const licenseExists = await prisma.userExtra.findFirst({
        where: { license_number }
      });
      if (licenseExists && licenseExists.userId !== userId) {
        return res.status(400).json({ error: 'License number already exists' });
      }
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        phone,
        // Allow admin to update is_verified if provided, else keep old status
        is_verified: typeof is_verified === 'boolean' && currentUserRole === 'admin'
          ? is_verified
          : existingUser.is_verified,

        userExtra: {
          update: {
            experience_years,
            address,
            emergency_contact,
            active,
            license_number: existingUser.role === 'driver' ? license_number : null,
            license_expiry: existingUser.role === 'driver' && license_expiry
              ? new Date(license_expiry)
              : null
          }
        }
      },
      include: { userExtra: true }
    });

    res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    console.log(userId, 'userid');

    const existingUser = await prisma.user.findUnique({ where: { id: userId } });

    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Prevent deletion if user is admin
    if (existingUser.role === 'admin') {
      return res.status(403).json({ error: 'Cannot delete user with admin role' });
    }

    await prisma.user.delete({ where: { id: userId } });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// List driver names and IDs (dropdown)
exports.getDriverDropdown = async (req, res) => {
  try {
    const drivers = await prisma.user.findMany({
      where: { role: "driver" },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    });
    res.json(drivers);
  } catch (error) {
    console.error('Error fetching drivers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// List conductor names and IDs (dropdown)
exports.getConductorDropdown = async (req, res) => {
  try {
    const conductors = await prisma.user.findMany({
      where: { role: "conductor" },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    });
    res.json(conductors);
  } catch (error) {
    console.error('Error fetching conductors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
