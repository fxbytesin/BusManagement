const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getAllDriver = async (req, res) => {
  try {
    const {
      search = "",
      limit = 10,
      page = 1,
      order = "ASC",
      orderColumn = "created_at"
    } = req.body;

    const take = Number(limit);
    const skip = (Number(page) - 1) * take;

    // ✅ Ensure valid order
    const sortOrder = order && order.toUpperCase() === "DESC" ? "desc" : "asc";

    // ✅ Allow only safe columns
    const validColumns = ["created_at", "name", "email", "phone", "license_number"];
    const sortColumn = validColumns.includes(orderColumn) ? orderColumn : "created_at";

    // ✅ Search filter
      const whereCondition = {
      // user_id: req.user.id,
      ...(search
        ? {
            OR: [
              { name: { contains: search } },
              { phone: { contains: search } },
            ]
          }
        : {})
    };
    const drivers = await prisma.driver.findMany({
      where: whereCondition,
      orderBy: { [sortColumn]: sortOrder },
      skip,
      take
    });

    const totalCount = await prisma.driver.count({ where: whereCondition });

    res.json({
      data: drivers,
      pagination: {
        total: totalCount,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(totalCount / take)
      }
    });
  } catch (error) {
    console.error("Error fetching drivers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createDriver = async (req, res) => {
  try {
    const { name, phone, license_number, license_expiry, experience_years, address, emergency_contact } = req.body;

    // Required field validation
    if (!name || !phone || !license_number) {
      return res.status(400).json({ error: 'Name, phone, and license number are required' });
    }

    // Simple phone validation (adjust regex as needed)
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return res.status(400).json({ error: 'Invalid phone number format' });
    }

    // Check for duplicate phone under the same user
    const existingPhone = await prisma.driver.findFirst({
      where: { phone, user_id: req.user.id }
    });
    if (existingPhone) {
      return res.status(400).json({ error: 'Phone number already exists for your account' });
    }

    // Check for duplicate license number under the same user
    const existingLicense = await prisma.driver.findFirst({
      where: { license_number, user_id: req.user.id }
    });
    if (existingLicense) {
      return res.status(400).json({ error: 'License number already exists for your account' });
    }

    // Validate experience_years
    if (experience_years !== undefined && experience_years < 0) {
      return res.status(400).json({ error: 'Experience years cannot be negative' });
    }

    // Convert license_expiry to Date if provided
    const expiryDate = license_expiry ? new Date(license_expiry) : null;

    const newDriver = await prisma.driver.create({
      data: {
        user_id: req.user.id,
        name,
        phone,
        license_number,
        license_expiry: expiryDate,
        experience_years: experience_years || 0,
        address,
        emergency_contact,
      },
    });

    res.status(201).json(newDriver);
  } catch (error) {
    console.error('Error creating driver:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateDriver = async (req, res) => {
  try {
    const driverId = parseInt(req.params.id);
    const { name, phone, license_number, license_expiry, experience_years, address, emergency_contact, active } = req.body;

    // Ensure driver exists and belongs to current user
    const existingDriver = await prisma.driver.findFirst({
      where: { id: driverId, user_id: req.user.id }
    });
    if (!existingDriver) {
      return res.status(404).json({ error: 'Driver not found or unauthorized' });
    }

    // Validate phone if changed
    if (phone && phone !== existingDriver.phone) {
      if (!/^[6-9]\d{9}$/.test(phone)) {
        return res.status(400).json({ error: 'Invalid phone number format' });
      }
      const duplicatePhone = await prisma.driver.findFirst({
        where: {
          phone,
          user_id: req.user.id,
          id: { not: driverId }
        }
      });
      if (duplicatePhone) {
        return res.status(400).json({ error: 'Phone number already exists for your account' });
      }
    }

    // Validate license_number if changed
    if (license_number && license_number !== existingDriver.license_number) {
      const duplicateLicense = await prisma.driver.findFirst({
        where: {
          license_number,
          user_id: req.user.id,
          id: { not: driverId }
        }
      });
      if (duplicateLicense) {
        return res.status(400).json({ error: 'License number already exists for your account' });
      }
    }

    if (experience_years !== undefined && experience_years < 0) {
      return res.status(400).json({ error: 'Experience years cannot be negative' });
    }

    const expiryDate = license_expiry ? new Date(license_expiry) : null;

    const updatedDriver = await prisma.driver.update({
      where: { id: driverId },
      data: {
        name,
        phone,
        license_number,
        license_expiry: expiryDate,
        experience_years,
        address,
        emergency_contact,
        active,
        updated_at: new Date()
      }
    });

    res.json(updatedDriver);
  } catch (error) {
    console.error('Error updating driver:', error);
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Driver not found or unauthorized' });
    } else if (error.code === 'P2002') {
      res.status(400).json({ error: 'License number or phone already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

exports.deleteDriver = async (req, res) => {
  try {
    const driverId = parseInt(req.params.id);

    // Ensure driver exists and belongs to current user
    const existingDriver = await prisma.driver.findFirst({
      where: { id: driverId, user_id: req.user.id }
    });

    if (!existingDriver) {
      return res.status(404).json({ error: 'Driver not found or unauthorized' });
    }

    await prisma.driver.delete({
      where: { id: driverId }
    });

    res.json({ message: 'Driver deleted successfully' });
  } catch (error) {
    console.error('Error deleting driver:', error);
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Driver not found or unauthorized' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
