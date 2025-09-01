const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Utility to generate ticket number
function generateTicketNumber() {
  return 'TKT-' + Date.now().toString().slice(-6);
}

// Create ticket controller with full validation including trip
exports.createTicket = async (req, res) => {
  try {
    const {
      trip_id,
      bus_id,
      from_stop,
      to_stop,
      fare,
      journey_date,
      payment_mode,
      pos_machine_id,
      seat_no
    } = req.body;

    // Validate required fields
    if (!bus_id || !trip_id || !from_stop || !to_stop || !fare || !journey_date || !pos_machine_id) {
      return res.status(400).json({
        error: 'bus_id, trip_id, from_stop, to_stop, fare, journey_date, and pos_machine_id are required.'
      });
    }

    // Validate bus exists
    const bus = await prisma.bus.findUnique({ where: { id: bus_id }, select: { capacity: true } });
    if (!bus) {
      return res.status(404).json({ error: 'Bus not found' });
    }

    // Validate trip exists & matches bus
    const trip = await prisma.trip.findUnique({ where: { id: trip_id } });
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    if (trip.status === 'COMPLETED' || trip.status === 'CANCELLED') {
  return res.status(400).json({ error: `Cannot create ticket: Trip is ${trip.status.toLowerCase()}` });
  }

    if (trip.bus_id !== bus_id) {
      return res.status(400).json({ error: 'Trip does not belong to the specified bus' });
    }

    // Validate seat_no if provided
    if (seat_no !== undefined && seat_no !== null) {
      if (seat_no <= 0 || seat_no > bus.capacity) {
        return res.status(400).json({ error: `Invalid seat_no. Bus capacity is ${bus.capacity}` });
      }

      // Check seat availability for trip and date
      const existingTicket = await prisma.ticket.findFirst({
        where: {
          trip_id,
          journey_date: new Date(journey_date),
          seat_no,
          status: { not: 'cancelled' }
        }
      });
      if (existingTicket) {
        return res.status(400).json({ error: `Seat number ${seat_no} is already booked for this trip on the selected date.` });
      }
    }

    // Validate POS machine existence
    const posMachine = await prisma.pOSMachine.findUnique({ where: { id: pos_machine_id } });
    if (!posMachine) {
      return res.status(404).json({ error: 'POS machine not found' });
    }

    // Validate fare (positive)
    if (fare <= 0) {
      return res.status(400).json({ error: 'Fare must be a positive number' });
    }

    // Validate payment_mode
    const validPaymentModes = ['cash', 'online'];
    if (payment_mode && !validPaymentModes.includes(payment_mode)) {
      return res.status(400).json({ error: `Invalid payment_mode, must be one of: ${validPaymentModes.join(', ')}` });
    }

    const ticket_number = generateTicketNumber();

    const newTicket = await prisma.ticket.create({
      data: {
        bus_id,
        trip_id,
        ticket_number,
        from_stop,
        to_stop,
        fare,
        journey_date: new Date(journey_date),
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


// Get allocated seats for a trip on a specific date
exports.getAllocatedSeatsByTrip = async (req, res) => {
  try {
    const tripId = parseInt(req.params.tripId);
    const { date } = req.query;

    if (isNaN(tripId)) return res.status(400).json({ error: 'Invalid trip ID' });
    if (!date) return res.status(400).json({ error: 'Journey date is required' });

    const journeyDate = new Date(date);
    if (isNaN(journeyDate.getTime())) return res.status(400).json({ error: 'Invalid date format' });

    const tickets = await prisma.ticket.findMany({
      where: {
        trip_id: tripId,
        journey_date: journeyDate,
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



