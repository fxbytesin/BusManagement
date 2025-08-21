const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Get all conductors for the current user
exports.getAllConductor = async (req, res) => {
  try {
    const conductors = await prisma.conductor.findMany({
      where: { user_id: req.user.id },
      orderBy: { created_at: 'desc' }
    });
    res.json(conductors);
  } catch (error) {
    console.error('Error fetching conductors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

//Create Conductor
exports.createConductor = async (req, res) => {
  try {
    const { name, phone, experience_years, address, emergency_contact } = req.body;

    // Basic required field validation
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }

    // Validate phone format (simple example, adjust as needed)
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return res.status(400).json({ error: 'Invalid phone number format' });
    }

    // Prevent duplicate phone for this user
    const existingPhone = await prisma.conductor.findFirst({
      where: {
        phone,
        user_id: req.user.id
      }
    });
    if (existingPhone) {
      return res.status(400).json({ error: 'Phone number already exists for your account' });
    }

    // Ensure positive experience years (if provided)
    if (experience_years !== undefined && experience_years < 0) {
      return res.status(400).json({ error: 'Experience years cannot be negative' });
    }

    const newConductor = await prisma.conductor.create({
      data: {
        user_id: req.user.id,
        name,
        phone,
        experience_years: experience_years || 0,
        address,
        emergency_contact
      }
    });

    res.status(201).json(newConductor);
  } catch (error) {
    console.error('Error creating conductor:', error);
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'Phone number already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

// Update conductor 
exports.updateConductor = async (req, res) => {
  try {
    const { name, phone, experience_years, address, emergency_contact, active } = req.body;
    const conductorId = parseInt(req.params.id);

    // Ensure conductor exists for this user
    const existingConductor = await prisma.conductor.findFirst({
      where: { id: conductorId, user_id: req.user.id }
    });
    if (!existingConductor) {
      return res.status(404).json({ error: 'Conductor not found' });
    }

    // Prevent duplicate phone for this user if updating phone
    if (phone && phone !== existingConductor.phone) {
      const duplicatePhone = await prisma.conductor.findFirst({
        where: {
          phone,
          user_id: req.user.id,
          id: { not: conductorId }
        }
      });
      if (duplicatePhone) {
        return res.status(400).json({ error: 'Phone number already exists for your account' });
      }
      if (!/^[6-9]\d{9}$/.test(phone)) {
        return res.status(400).json({ error: 'Invalid phone number format' });
      }
    }

    if (experience_years !== undefined && experience_years < 0) {
      return res.status(400).json({ error: 'Experience years cannot be negative' });
    }

    const updatedConductor = await prisma.conductor.update({
      where: { id: conductorId },
      data: {
        name,
        phone,
        experience_years,
        address,
        emergency_contact,
        active,
        updated_at: new Date()
      }
    });

    res.json(updatedConductor);
  } catch (error) {
    console.error('Error updating conductor:', error);
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Conductor not found' });
    } else if (error.code === 'P2002') {
      res.status(400).json({ error: 'Phone number already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

// Delete conductor with existence check
exports.deleteConductor = async (req, res) => {
  try {
    const conductorId = parseInt(req.params.id);

    // Ensure conductor exists for this user
    const existingConductor = await prisma.conductor.findFirst({
      where: { id: conductorId, user_id: req.user.id }
    });
    if (!existingConductor) {
      return res.status(404).json({ error: 'Conductor not found' });
    }

    await prisma.conductor.delete({
      where: { id: conductorId }
    });

    res.json({ message: 'Conductor deleted successfully' });
  } catch (error) {
    console.error('Error deleting conductor:', error);
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Conductor not found' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
