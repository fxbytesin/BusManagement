const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Utility to generate ticket number
function generateTicketNumber() {
  return 'TKT-' + Date.now().toString().slice(-6);
}

// Create ticket controller with full validation
exports.createTicket = async (req, res) => {
  try {
    const {
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
    if (!bus_id || !from_stop || !to_stop || !fare || !journey_date || !pos_machine_id) {
      return res.status(400).json({
        error: 'bus_id, from_stop, to_stop, fare, journey_date, and pos_machine_id are required.'
      });
    }

    // Validate bus exists
    const bus = await prisma.bus.findUnique({ where: { id: bus_id }, select: { capacity: true } });
    if (!bus) {
      return res.status(404).json({ error: 'Bus not found' });
    }

    // Validate seat_no if provided
    if (seat_no !== undefined && seat_no !== null) {
      if (seat_no <= 0 || seat_no > bus.capacity) {
        return res.status(400).json({ error: `Invalid seat_no. Bus capacity is ${bus.capacity}` });
      }

      // Check if seat already booked (not cancelled) for same bus and journey date
      const existingTicket = await prisma.ticket.findFirst({
        where: {
          bus_id,
          journey_date: new Date(journey_date),
          seat_no,
          status: { not: 'cancelled' }
        }
      });

      if (existingTicket) {
        return res.status(400).json({ error: `Seat number ${seat_no} is already booked for this bus on the selected date.` });
      }
    }

    // Validate POS machine existence
    const posMachine = await prisma.pOSMachine.findUnique({ where: { id: pos_machine_id } });
    if (!posMachine) {
      return res.status(404).json({ error: 'POS machine not found' });
    }

    // Validate fare (positive decimal)
    if (fare <= 0) {
      return res.status(400).json({ error: 'Fare must be a positive number' });
    }

    // Validate payment_mode
    const validPaymentModes = ['cash', 'online'];
    if (payment_mode && !validPaymentModes.includes(payment_mode)) {
      return res.status(400).json({ error: `Invalid payment_mode, must be one of: ${validPaymentModes.join(', ')}` });
    }

    // Create ticket
    const ticket_number = generateTicketNumber();

    const newTicket = await prisma.ticket.create({
      data: {
        bus_id,
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

// Get tickets for a specific bus with optional journey_date filter
exports.getTicketForSpecificBus = async (req, res) => {
  try {
    const busId = parseInt(req.params.busId);
    const { date } = req.query;

    if (isNaN(busId)) {
      return res.status(400).json({ error: 'Invalid bus ID' });
    }

    const where = { bus_id: busId };

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
