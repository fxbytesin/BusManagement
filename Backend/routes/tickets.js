const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// Generate a simple ticket number
function generateTicketNumber() {
  return 'TKT-' + Date.now().toString().slice(-6); // Example: TKT-123456
}

// Create ticket
router.post('/', authenticateToken, async (req, res) => {
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

    if (!bus_id || !from_stop || !to_stop || !fare || !journey_date || !pos_machine_id) {
      return res.status(400).json({ error: 'bus_id, from_stop, to_stop, fare, journey_date, and pos_machine_id are required.' });
    }

    // 1. Check if seat_no is provided and valid
    if (seat_no !== undefined && seat_no !== null) {
      // Fetch bus capacity first
      const bus = await prisma.bus.findUnique({
        where: { id: bus_id },
        select: { capacity: true }
      });

      if (!bus) {
        return res.status(404).json({ error: 'Bus not found' });
      }

      if (seat_no > bus.capacity || seat_no <= 0) {
        return res.status(400).json({ error: `Invalid seat number. Bus capacity is ${bus.capacity}` });
      }

      // Check if seat already booked for this journey and bus
      const existingTicket = await prisma.ticket.findFirst({
        where: {
          bus_id,
          journey_date: new Date(journey_date),
          seat_no,
          status: { not: 'cancelled' } // ignore cancelled tickets
        }
      });

      if (existingTicket) {
        return res.status(400).json({ error: `Seat number ${seat_no} is already booked for this bus on the selected date.` });
      }
    }

      // Validate POS machine existence
    const posMachine = await prisma.pOSMachine.findUnique({
      where: { id: pos_machine_id }
    });
    if (!posMachine) {
      return res.status(404).json({ error: 'POS machine not found' });
    }

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
});



// Get tickets for a specific bus
router.get('/bus/:busId', authenticateToken, async (req, res) => {
  try {
    const busId = parseInt(req.params.busId);
    const { date } = req.query;

    const where = {
      bus_id: busId
    };

    if (date) {
      where.journey_date = new Date(date);
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
});

module.exports = router;