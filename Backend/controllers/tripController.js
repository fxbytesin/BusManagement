const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

exports.getAllTrips = async (req, res) => {
  try {
    const {
      search = '',
      limit = 10,
      page = 1,
      order = 'desc',
      orderColumn = 'start_time'
    } = req.query;
 
    const pageInt = parseInt(page);
    const limitInt = parseInt(limit);
    const skip = (pageInt - 1) * limitInt;
 
    // Build search filter (extended for joins)
    const whereClause = search
      ? {
          OR: [
            { destination: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
            { route: { name: { contains: search, mode: 'insensitive' } } },
            { bus: { bus_number: { contains: search, mode: 'insensitive' } } },
            { driver: { name: { contains: search, mode: 'insensitive' } } },
            { conductor: { name: { contains: search, mode: 'insensitive' } } }
          ]
        }
      : {};
 
    const allowedColumns = [
      'start_time',
      'end_time',
      'destination',
      'created_at'
    ];
    const validOrderColumn = allowedColumns.includes(orderColumn)
      ? orderColumn
      : 'start_time';
    const validOrder = order.toLowerCase() === 'asc' ? 'asc' : 'desc';
 
    // Fetch trips with related data
    const [tripsRaw, totalCount] = await Promise.all([
      prisma.trip.findMany({
        where: whereClause,
        orderBy: { [validOrderColumn]: validOrder },
        skip: skip,
        take: limitInt,
        include: {
          bus: {
            select: {
              id: true,
              bus_number: true,
              capacity: true
            }
          },
          route: {
            select: { id: true, name: true }
          },
          driver: {
            select: { id: true, name: true }
          },
          conductor: {
            select: { id: true, name: true }
          }
        }
      }),
      prisma.trip.count({ where: whereClause })
    ]);
 
    // Flatten response (snake_case keys)
    const trips = tripsRaw.map(trip => ({
      id: trip.id,
      start_time: trip.start_time,
      end_time: trip.end_time,
      status: trip.status,
      created_at: trip.created_at,
      updated_at: trip.updated_at,
      bus_id: trip.bus_id,
      route_id: trip.route_id,
      driver_id: trip.driver_id,
      conductor_id: trip.conductor_id,
      bus_number: trip.bus?.bus_number || null,
      bus_capacity: trip.bus?.capacity || null,
      route_name: trip.route?.name || null,
      driver_name: trip.driver?.name || null,
      conductor_name: trip.conductor?.name || null
    }));
 
    const totalPages = Math.ceil(totalCount / limitInt);
    const hasNextPage = pageInt < totalPages;
    const hasPrevPage = pageInt > 1;
 
    res.json({
      trips,
      pagination: {
        current_page: pageInt,
        total_pages: totalPages,
        total_count: totalCount,
        has_next_page: hasNextPage,
        has_prev_page: hasPrevPage,
        limit: limitInt
      }
    });
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
    const { bus_id, route_id, start_time, end_time, driver_id, conductor_id } = req.body;

    if (!bus_id || !route_id || !start_time) {
      return res.status(400).json({ error: 'bus_id, route_id and start_time are required' });
    }

    // Validate FKs existence (unchanged)
    const bus = await prisma.bus.findUnique({ where: { id: bus_id } });
    if (!bus) return res.status(404).json({ error: 'Bus not found' });

    const route = await prisma.route.findUnique({ where: { id: route_id } });
    if (!route) return res.status(404).json({ error: 'Route not found' });

    if (driver_id) {
      const driver = await prisma.driver.findUnique({ where: { id: driver_id } });
      if (!driver) return res.status(404).json({ error: 'Driver not found' });
    }

    if (conductor_id) {
      const conductor = await prisma.conductor.findUnique({ where: { id: conductor_id } });
      if (!conductor) return res.status(404).json({ error: 'Conductor not found' });
    }

    // Check overlapping trips for bus
    const start = new Date(start_time);
    const end = end_time ? new Date(end_time) : null;

    const overlappingTrip = await prisma.trip.findFirst({
      where: {
        status: {
          notIn: ['COMPLETED', 'CANCELLED'],
        },
        AND: [
          {
            bus_id,
          },
          {
            OR: end
              ? [
                  {
                    start_time: { lte: end },
                    end_time: { gte: start },
                  },
                  {
                    start_time: { lte: end },
                    end_time: null,
                  }
                ]
              : [
                  {
                    start_time: { equals: start },
                  }
                ],
          },
        ],
      },
    });

    if (overlappingTrip) {
      return res.status(400).json({ error: 'Bus already assigned to an overlapping trip during this time' });
    }

    // Similarly, check overlapping trips for driver if driver_id is provided
    if (driver_id) {
      const overlappingDriverTrip = await prisma.trip.findFirst({
        where: {
          status: {
            notIn: ['COMPLETED', 'CANCELLED'],
          },
          driver_id,
          AND: end
            ? [
                {
                  start_time: { lte: end },
                  end_time: { gte: start },
                },
                {
                  start_time: { lte: end },
                  end_time: null,
                }
              ]
            : [
                {
                  start_time: { equals: start },
                },
              ],
        },
      });

      if (overlappingDriverTrip) {
        return res.status(400).json({ error: 'Driver already assigned to an overlapping trip during this time' });
      }
    }

    // Similarly, check overlapping trips for conductor if conductor_id is provided
    if (conductor_id) {
      const overlappingConductorTrip = await prisma.trip.findFirst({
        where: {
          status: {
            notIn: ['COMPLETED', 'CANCELLED'],
          },
          conductor_id,
          AND: end
            ? [
                {
                  start_time: { lte: end },
                  end_time: { gte: start },
                },
                {
                  start_time: { lte: end },
                  end_time: null,
                }
              ]
            : [
                {
                  start_time: { equals: start },
                },
              ]
        },
      });

      if (overlappingConductorTrip) {
        return res.status(400).json({ error: 'Conductor already assigned to an overlapping trip during this time' });
      }
    }

    // Create the trip if no conflicts
    const newTrip = await prisma.trip.create({
      data: {
        bus_id,
        route_id,
        start_time: start,
        end_time: end,
        status: 'SCHEDULED',
        driver_id: driver_id || null,
        conductor_id: conductor_id || null,
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

    const { bus_id, route_id, start_time, end_time, status, driver_id, conductor_id } = req.body;

    if (bus_id) {
      const bus = await prisma.bus.findUnique({ where: { id: bus_id } });
      if (!bus) return res.status(404).json({ error: 'Bus not found' });
    }
    if (route_id) {
      const route = await prisma.route.findUnique({ where: { id: route_id } });
      if (!route) return res.status(404).json({ error: 'Route not found' });
    }
    if (driver_id) {
      const driver = await prisma.driver.findUnique({ where: { id: driver_id } });
      if (!driver) return res.status(404).json({ error: 'Driver not found' });
    }
    if (conductor_id) {
      const conductor = await prisma.conductor.findUnique({ where: { id: conductor_id } });
      if (!conductor) return res.status(404).json({ error: 'Conductor not found' });
    }

    const start = start_time ? new Date(start_time) : null;
    const end = end_time ? new Date(end_time) : null;

    // Get existing trip before update to compare
    const existingTrip = await prisma.trip.findUnique({ where: { id: tripId } });
    if (!existingTrip) return res.status(404).json({ error: 'Trip not found' });

    const busToCheck = bus_id || existingTrip.bus_id;
    const driverToCheck = driver_id !== undefined ? driver_id : existingTrip.driver_id;
    const conductorToCheck = conductor_id !== undefined ? conductor_id : existingTrip.conductor_id;
    const startToCheck = start || existingTrip.start_time;
    const endToCheck = end !== null ? end : existingTrip.end_time;

    // Function to check overlap excluding current trip
    async function hasOverlap(entityField, entityId) {
      if (!entityId) return false;
      const overlapping = await prisma.trip.findFirst({
        where: {
          status: { notIn: ['COMPLETED', 'CANCELLED'] },
          AND: [
            { [entityField]: entityId },
            {
              id: { not: tripId }  // exclude current updating trip
            },
            endToCheck
              ? {
                  OR: [
                    {
                      start_time: { lte: endToCheck },
                      end_time: { gte: startToCheck },
                    },
                    {
                      start_time: { lte: endToCheck },
                      end_time: null,
                    }
                  ],
                }
              : {
                  start_time: { equals: startToCheck },
                }
          ]
        }
      });
      return !!overlapping;
    }

    if (await hasOverlap('bus_id', busToCheck)) {
      return res.status(400).json({ error: 'Bus already assigned to an overlapping trip during this time' });
    }
    if (await hasOverlap('driver_id', driverToCheck)) {
      return res.status(400).json({ error: 'Driver already assigned to an overlapping trip during this time' });
    }
    if (await hasOverlap('conductor_id', conductorToCheck)) {
      return res.status(400).json({ error: 'Conductor already assigned to an overlapping trip during this time' });
    }

    // Proceed with update
    const updatedTrip = await prisma.trip.update({
      where: { id: tripId },
      data: {
        bus_id,
        route_id,
        start_time: start || undefined,
        end_time: end !== undefined ? end : undefined,
        status,
        driver_id: driver_id === undefined ? undefined : driver_id,
        conductor_id: conductor_id === undefined ? undefined : conductor_id,
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

exports.updateTripStatus = async (req, res) => {
  try {
    const tripId = parseInt(req.params.id);
    if (isNaN(tripId)) return res.status(400).json({ error: 'Invalid trip ID' });

    const { status } = req.body;
    const allowedStatuses = ["SCHEDULED", "RUNNING", "COMPLETED", "CANCELLED"];

    if (!status || !allowedStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid or missing status value' });
    }

    const trip = await prisma.trip.findUnique({ where: { id: tripId } });
    if (!trip) return res.status(404).json({ error: 'Trip not found' });


    const updatedTrip = await prisma.trip.update({
      where: { id: tripId },
      data: { status },
    });

    res.json({ message: 'Trip status updated successfully', trip: updatedTrip });
  } catch (error) {
    console.error('Error updating trip status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};