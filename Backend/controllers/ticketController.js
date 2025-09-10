const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Utility to generate ticket number
function generateTicketNumber() {
  return 'TKT-' + Date.now().toString().slice(-6);
}

exports.createTicket = async (req, res) => {
  try {
    const {
      trip_id,
      from_stop,
      to_stop,
      fare,
      payment_mode,
      pos_machine_id,
      seat_no
    } = req.body;

    if (!trip_id) {
      return res.status(400).json({ error: 'trip_id is required in the request body' });
    }

    const tripId = parseInt(trip_id);
    if (isNaN(tripId)) {
      return res.status(400).json({ error: 'Invalid trip_id' });
    }

    // Validate required fields except journey_date
    if (!from_stop || !to_stop || !fare || !pos_machine_id) {
      return res.status(400).json({
        error: 'from_stop, to_stop, fare, and pos_machine_id are required.'
      });
    }

    // Fetch trip & validate
    const trip = await prisma.trip.findUnique({
      where: { id: tripId },
      include: { bus: true }
    });

    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    if (trip.status === 'COMPLETED' || trip.status === 'CANCELLED') {
      return res.status(400).json({ error: `Cannot create ticket: Trip is ${trip.status.toLowerCase()}` });
    }

    const bus = trip.bus;
    if (!bus) {
      return res.status(400).json({ error: 'Bus info missing for trip' });
    }

    // Use trip.start_time as journey_date
    const journeyDate = trip.start_time;

    // Validate seat_no if provided
    if (seat_no !== undefined && seat_no !== null) {
      if (seat_no <= 0 || seat_no > bus.capacity) {
        return res.status(400).json({ error: `Seat number must be between 1 and ${bus.capacity}` });
      }

      const existingTicket = await prisma.ticket.findFirst({
        where: {
          trip_id: tripId,
          journey_date: journeyDate,
          seat_no,
          status: { not: 'cancelled' }
        }
      });
      if (existingTicket) {
        return res.status(400).json({ error: `Seat number ${seat_no} is already booked for this trip.` });
      }
    }

    // Validate POS machine
    const posMachine = await prisma.pOSMachine.findUnique({ where: { id: pos_machine_id } });
    if (!posMachine) {
      return res.status(404).json({ error: 'POS machine not found' });
    }

    // Validate fare and payment mode
    if (fare <= 0) {
      return res.status(400).json({ error: 'Fare must be a positive number' });
    }
    const validPaymentModes = ['cash', 'online'];
    if (payment_mode && !validPaymentModes.includes(payment_mode)) {
      return res.status(400).json({ error: `Invalid payment_mode, must be one of: ${validPaymentModes.join(', ')}` });
    }

    const ticket_number = generateTicketNumber();

    const newTicket = await prisma.ticket.create({
      data: {
        trip_id: tripId,
        bus_id: bus.id,
        ticket_number,
        from_stop,
        to_stop,
        fare,
        journey_date: journeyDate,
        payment_mode: payment_mode || 'cash',
        pos_machine_id,
        seat_no: seat_no || null,
      }
    });

    res.status(201).json(newTicket);

  } catch (error) {
    console.error('Error creating ticket:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




// Get tickets for a specific trip with optional journey_date filter
exports.getTicketForSpecificTrip = async (req, res) => {
  try {
    const tripId = parseInt(req.params.tripId);
    const { date } = req.query;

    if (isNaN(tripId)) return res.status(400).json({ error: 'Invalid trip ID' });

    const where = { trip_id: tripId };

    if (date) {
      const journeyDate = new Date(date);
      if (isNaN(journeyDate.getTime())) {
        return res.status(400).json({ error: 'Invalid date format' });
      }
      where.journey_date = journeyDate;
    }

    const tickets = await prisma.ticket.findMany({
      where,
      orderBy: { issue_time: 'desc' }
    });

    res.json(tickets);

  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// View ticket details by ID with related bus and POS machine info
exports.viewTicket = async (req, res) => {
  try {
    const ticketId = parseInt(req.params.id);
    if (isNaN(ticketId)) {
      return res.status(400).json({ error: 'Invalid ticket ID' });
    }

    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
      include: {
        bus: { select: { bus_number: true } },
        posMachine: { select: { serial_no: true } },
        trip: { select: { start_time: true, end_time: true, status: true } }
      }
    });

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.json(ticket);

  } catch (error) {
    console.error('Error fetching ticket:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Get allocated seats for a trip (all dates)
exports.getAllocatedSeatsByTrip = async (req, res) => {
  try {
    const tripId = parseInt(req.params.tripId);
    if (isNaN(tripId)) return res.status(400).json({ error: 'Invalid trip ID' });

    const tickets = await prisma.ticket.findMany({
      where: {
        trip_id: tripId,
        status: { not: 'cancelled' },
        seat_no: { not: null }
      },
      select: { seat_no: true }
    });

    const allocatedSeats = tickets.map(t => t.seat_no);

    res.json({ allocatedSeats });

  } catch (error) {
    console.error('Error fetching allocated seats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getTripsByBus = async (req, res) => {
  try {
    const { bus_id, journey_date } = req.query;

    if (!bus_id) {
      return res.status(400).json({ error: 'bus_id is required' });
    }

    const tripFilter = {
      bus_id: Number(bus_id),
    };

    if (journey_date) {
      const dateObj = new Date(journey_date);
      // Filter trips happening on the specific date
      tripFilter.journey_date = dateObj;
    }

    // Get trips matching bus_id (and optional journey_date)
    const trips = await prisma.trip.findMany({
      where: tripFilter,
      select: {
        id: true,
        departure_time: true,
        arrival_time: true,
        journey_date: true,
        status: true,
      },
    });

    return res.status(200).json(trips);
  } catch (error) {
    console.error('Error fetching trips:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
