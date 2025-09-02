const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getAllTrips = async (req, res) => {
  try {
    const trips = await prisma.trip.findMany({
      orderBy: { start_time: 'desc' },
      include: {
        bus: {
          select: {
            id: true,
            bus_number: true,
          },
        },
        route: {
          select: {
            id: true,
            name: true,
          },
        },
        driver: {
          select: {
            id: true,
            name: true,
          },
        },
        conductor: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    res.json(trips);
  } catch (error) {
    console.error('Error fetching trips:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getTripById = async (req, res) => {
  try {
    const tripId = parseInt(req.params.id);
    if (isNaN(tripId)) {
      return res.status(400).json({ error: 'Invalid trip ID' });
    }

    const trip = await prisma.trip.findUnique({ where: { id: tripId } });
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }
    res.json(trip);
  } catch (error) {
    console.error('Error fetching trip:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createTrip = async (req, res) => {
  try {
    const { bus_id, start_time, end_time, status } = req.body;

    if (!bus_id || !start_time) {
      return res.status(400).json({ error: 'bus_id and start_time are required' });
    }

    // Validate bus existence
    const bus = await prisma.bus.findUnique({ where: { id: bus_id } });
    if (!bus) return res.status(404).json({ error: 'Bus not found' });

    const start = new Date(start_time);
    const end = end_time ? new Date(end_time) : null;

    // Check overlapping trips for bus
    const overlappingTrip = await prisma.trip.findFirst({
      where: {
        status: {
          notIn: ['COMPLETED', 'CANCELLED']
        },
        bus_id,
        AND: end
          ? [
              {
                start_time: { lte: end },
                end_time: { gte: start },
              },
              {
                OR: [
                  { end_time: null },
                  { end_time: { gte: start } }
                ]
              }
            ]
          : [
              { start_time: { equals: start } }
            ],
      }
    });

    if (overlappingTrip) {
      return res.status(400).json({ error: 'Bus already assigned to an overlapping trip during this time' });
    }
    
    // Create trip
    const newTrip = await prisma.trip.create({
      data: {
      bus: {
      connect: { id: bus_id }, // bus_id is from input
      },
        start_time: start,
        end_time: end,
        status: status || 'SCHEDULED',
      },
    });

    res.status(201).json(newTrip);
  } catch (error) {
    console.error('Error creating trip:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateTrip = async (req, res) => {
  try {
    const tripId = parseInt(req.params.id);
    if (isNaN(tripId)) return res.status(400).json({ error: 'Invalid trip ID' });

    const { start_time, end_time, status } = req.body;

    // Get existing trip
    const existingTrip = await prisma.trip.findUnique({ where: { id: tripId } });
    if (!existingTrip) return res.status(404).json({ error: 'Trip not found' });

    const bus_id = existingTrip.bus_id;
    const startToCheck = start_time ? new Date(start_time) : existingTrip.start_time;
    const endToCheck = end_time !== undefined ? (end_time ? new Date(end_time) : null) : existingTrip.end_time;

    // Check overlapping trips for bus excluding current trip
    const overlapping = await prisma.trip.findFirst({
      where: {
        status: { notIn: ['COMPLETED', 'CANCELLED'] },
        bus_id,
        id: { not: tripId },
        AND: endToCheck
          ? [
              {
                start_time: { lte: endToCheck },
                end_time: { gte: startToCheck },
              },
              {
                OR: [
                  { end_time: null },
                  { end_time: { gte: startToCheck } }
                ]
              }
            ]
          : [
              { start_time: { equals: startToCheck } }
            ],
      }
    });

    if (overlapping) {
      return res.status(400).json({ error: 'Bus already assigned to an overlapping trip during this time' });
    }

    // Update trip (no bus_id change allowed)
    const updatedTrip = await prisma.trip.update({
      where: { id: tripId },
      data: {
        start_time: start_time || undefined,
        end_time: end_time !== undefined ? end_time : undefined,
        status,
      }
    });

    res.json(updatedTrip);
  } catch (error) {
    console.error('Error updating trip:', error);
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Trip not found' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

exports.deleteTrip = async (req, res) => {
  try {
    const tripId = parseInt(req.params.id);
    if (isNaN(tripId)) {
      return res.status(400).json({ error: 'Invalid trip ID' });
    }
    await prisma.trip.delete({ where: { id: tripId } });
    res.json({ message: 'Trip deleted successfully' });
  } catch (error) {
    console.error('Error deleting trip:', error);
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Trip not found' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
