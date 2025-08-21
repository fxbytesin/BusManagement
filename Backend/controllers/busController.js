const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getAllBuses=async (req, res) => {
  try {
    const buses = await prisma.bus.findMany({
      where: { user_id: req.user.id },
      include: {
        route: {
          select: {
            name: true,
            code: true
          }
        },
        driver: {
          select: {
            name: true
          }
        },
        conductor: {
          select: {
            name: true
          }
        }
      },
      orderBy: { created_at: 'desc' }
    });

    // Format the response to match the original structure
    const formattedBuses = buses.map(bus => ({
      ...bus,
      route_name: bus.route?.name || null,
      route_code: bus.route?.code || null,
      driver_name: bus.driver?.name || null,
      conductor_name: bus.conductor?.name || null
    }));

    res.json(formattedBuses);
  } catch (error) {
    console.error('Error fetching buses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.createBus = async (req, res) => {
  try {
    const { bus_number, capacity, route_id, driver_id, conductor_id, status, current_location } = req.body;

    if (!bus_number || !capacity) {
      return res.status(400).json({ error: 'Bus number and capacity are required' });
    }

    // Validate bus_number uniqueness
    const existingBus = await prisma.bus.findUnique({ where: { bus_number } });
    if (existingBus) {
      return res.status(400).json({ error: 'Bus number already exists' });
    }

    // Validate route existence if given
    if (route_id) {
      console.log('hey')
      const route = await prisma.route.findUnique({ where: { id: route_id } });
      if (!route) {
        return res.status(404).json({ error: 'Route not found' });
      }
    }

    // Validate driver existence if given
    if (driver_id) {
      const driver = await prisma.driver.findUnique({ where: { id: driver_id } });
      if (!driver) {
        return res.status(404).json({ error: 'Driver not found' });
      }
    }

    // Validate conductor existence if given
    if (conductor_id) {
      const conductor = await prisma.conductor.findUnique({ where: { id: conductor_id } });
      if (!conductor) {
        return res.status(404).json({ error: 'Conductor not found' });
      }
    }

    // All validations passed; create bus
    const newBus = await prisma.bus.create({
      data: {
        user_id: req.user.id,
        bus_number,
        capacity,
        route_id: route_id || null,
        driver_id: driver_id || null,
        conductor_id: conductor_id || null,
        status: status || 'stopped',
        current_location: current_location || 'डिपो में'
      },
      include: {
        route: { select: { name: true } },
        driver: { select: { name: true } },
        conductor: { select: { name: true } }
      }
    });

    // Format the response for frontend
    const formattedBus = {
      ...newBus,
      route_name: newBus.route?.name || null,
      driver_name: newBus.driver?.name || null,
      conductor_name: newBus.conductor?.name || null
    };

    res.status(201).json(formattedBus);

  } catch (error) {
    console.error('Error creating bus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.updateBus = async (req, res) => {
  try {
    const busId = parseInt(req.params.id);
    const { bus_number, capacity, route_id, driver_id, conductor_id, status, current_location } = req.body;

    // If a route is provided, check if exists
    if (route_id) {
      const route = await prisma.route.findUnique({ where: { id: route_id } });
      if (!route) {
        return res.status(404).json({ error: 'Route not found' });
      }
    }
    // If a driver is provided, check if exists
    if (driver_id) {
      const driver = await prisma.driver.findUnique({ where: { id: driver_id } });
      if (!driver) {
        return res.status(404).json({ error: 'Driver not found' });
      }
    }
    // If a conductor is provided, check if exists
    if (conductor_id) {
      const conductor = await prisma.conductor.findUnique({ where: { id: conductor_id } });
      if (!conductor) {
        return res.status(404).json({ error: 'Conductor not found' });
      }
    }

    // Now update the bus (all FKs were validated)
    const updatedBus = await prisma.bus.update({
      where: { id: busId },
      data: {
        bus_number,
        capacity,
        route_id: route_id || null,
        driver_id: driver_id || null,
        conductor_id: conductor_id || null,
        status: status || 'stopped',
        current_location: current_location || 'डिपो में'
      },
      include: {
        route: { select: { name: true } },
        driver: { select: { name: true } },
        conductor: { select: { name: true } }
      }
    });

    // Format the response for frontend
    const formattedBus = {
      ...updatedBus,
      route_name: updatedBus.route?.name || null,
      driver_name: updatedBus.driver?.name || null,
      conductor_name: updatedBus.conductor?.name || null
    };

    res.status(200).json(formattedBus);

  } catch (error) {
    console.error('Error updating bus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.deleteBus=async (req, res) => {
  try {
    const busId = parseInt(req.params.id);

    await prisma.bus.delete({
      where: { 
        id: busId,
        user_id: req.user.id 
      }
    });

    res.json({ message: 'Bus deleted successfully' });
  } catch (error) {
    console.error('Error deleting bus:', error);
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Bus not found' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}