const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const ticketController=require('../controllers/ticketController')

// Generate a simple ticket number
function generateTicketNumber() {
  return 'TKT-' + Date.now().toString().slice(-6); 
}

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket booking and management APIs
 */

/**
 * @swagger
 * /ticket:
 *   post:
 *     summary: Create a new ticket
 *     tags: [Ticket]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Ticket data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bus_id
 *               - from_stop
 *               - to_stop
 *               - fare
 *               - journey_date
 *               - pos_machine_id
 *             properties:
 *               bus_id:
 *                 type: integer
 *               from_stop:
 *                 type: string
 *               to_stop:
 *                 type: string
 *               fare:
 *                 type: number
 *                 format: float
 *               journey_date:
 *                 type: string
 *                 format: date-time
 *               payment_mode:
 *                 type: string
 *                 enum: [cash, online]
 *               pos_machine_id:
 *                 type: integer
 *               seat_no:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Ticket created successfully
 *       400:
 *         description: Validation error or missing required fields
 *       404:
 *         description: Bus or POS machine not found
 */
router.post('/', authenticateToken,ticketController.createTicket );


/**
 * @swagger
 * /ticket/bus/{busId}:
 *   get:
 *     summary: Get tickets for a specific bus, optionally filter by journey_date
 *     tags: [Ticket]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: busId
 *         in: path
 *         description: Bus ID to retrieve tickets for
 *         required: true
 *         schema:
 *           type: integer
 *       - name: date
 *         in: query
 *         description: Filter tickets by journey_date (YYYY-MM-DD)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of tickets for bus
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/bus/:busId', authenticateToken,ticketController.getTicketForSpecificBus );

/**
 * @swagger
 * /ticket/{id}:
 *   get:
 *     summary: Get a single ticket by ID
 *     tags: [Ticket]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Ticket ID to fetch
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ticket object with bus_number and POS serial_no
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Ticket not found
 */
router.get('/:id', authenticateToken, ticketController.viewTicket);

module.exports = router;