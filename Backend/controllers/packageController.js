const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Utility function to generate a unique package number
function generatePackageNumber() {
  return 'PKG' + Math.floor(100000 + Math.random() * 900000);
}

exports.createPackage = async (req, res) => {
  try {
    const {
      bus_id,
      sender_name,
      sender_phone,
      receiver_name,
      receiver_phone,
      from_stop,
      to_stop,
      description,
      weight,
      fare
    } = req.body;

    // Validate required fields
    if (
      !bus_id || !sender_name || !sender_phone || !receiver_name ||
      !receiver_phone || !from_stop || !to_stop || !fare
    ) {
      return res.status(400).json({ error: 'All required fields must be provided' });
    }

    // Validate bus existence
    const bus = await prisma.bus.findUnique({ where: { id: bus_id } });
    if (!bus) {
      return res.status(404).json({ error: 'Bus not found' });
    }

    // Optional: Basic phone format validation (adjust regex as needed)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(sender_phone)) {
      return res.status(400).json({ error: 'Invalid sender phone format' });
    }
    if (!phoneRegex.test(receiver_phone)) {
      return res.status(400).json({ error: 'Invalid receiver phone format' });
    }

    // Validate weight if provided (must be positive number)
    if (weight !== undefined && weight !== null && weight <= 0) {
      return res.status(400).json({ error: 'Weight must be a positive number' });
    }

    // Validate fare (must be positive)
    if (fare <= 0) {
      return res.status(400).json({ error: 'Fare must be a positive number' });
    }

    const package_number = generatePackageNumber();

    const newPackage = await prisma.package.create({
      data: {
        bus_id,
        package_number,
        sender_name,
        sender_phone,
        receiver_name,
        receiver_phone,
        from_stop,
        to_stop,
        description: description || null,
        weight: weight || null,
        fare,
        status: 'booked',
        booked_at: new Date()
      }
    });

    res.status(201).json(newPackage);
  } catch (error) {
    console.error('Error creating package:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getPackage = async (req, res) => {
  try {
    const busId = parseInt(req.params.busId);
    if (isNaN(busId)) {
      return res.status(400).json({ error: 'Invalid bus ID' });
    }
    const { status } = req.query;

    const where = { bus_id: busId };

    if (status) {
      const validStatuses = ['booked', 'in_transit', 'delivered', 'cancelled'];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: 'Invalid package status' });
      }
      where.status = status;
    }

    const packages = await prisma.package.findMany({
      where,
      orderBy: { booked_at: 'desc' }
    });

    res.json(packages);
  } catch (error) {
    console.error('Error fetching packages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updatePackage = async (req, res) => {
  try {
    const { status } = req.body;
    const packageId = parseInt(req.params.id);
    if (isNaN(packageId)) {
      return res.status(400).json({ error: 'Invalid package ID' });
    }

    const validStatuses = ['booked', 'in_transit', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const updatedPackage = await prisma.package.update({
      where: { id: packageId },
      data: {
        status,
        delivered_at: status === 'delivered' ? new Date() : null
      }
    });

    res.json(updatedPackage);
  } catch (error) {
    console.error('Error updating package status:', error);
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Package not found' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
