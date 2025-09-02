const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const ticketController = require('../controllers/ticketController');

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket booking and management APIs
 */

/**
 * @swagger
 * /api/ticket/create-ticket:
 *   post:
 *     summary: Create a new ticket for a specific trip
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
 *               - trip_id
 *               - from_stop
 *               - to_stop
 *               - fare
 *               - pos_machine_id
 *             properties:
 *               trip_id:
 *                 type: integer
 *                 example: 10
 *               from_stop:
 *                 type: string
 *                 example: "Station A"
 *               to_stop:
 *                 type: string
 *                 example: "Station B"
 *               fare:
 *                 type: number
 *                 format: float
 *                 example: 150.50
 *               payment_mode:
 *                 type: string
 *                 enum: [cash, online]
 *                 example: cash
 *               pos_machine_id:
 *                 type: integer
 *                 example: 5
 *               seat_no:
 *                 type: integer
 *                 example: 12
 *     responses:
 *       201:
 *         description: Ticket created successfully
 *       400:
 *         description: Validation error or missing required fields
 *       404:
 *         description: Trip or POS machine not found
 *       500:
 *         description: Internal server error
 */
router.post('/create-ticket', authenticateToken, ticketController.createTicket);

/**
 * @swagger
 * /api/ticket/trip/{tripId}:
 *   get:
 *     summary: Get tickets for a specific trip, optionally filter by journey_date
 *     tags: [Ticket]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: tripId
 *         in: path
 *         description: Trip ID to retrieve tickets for
 *         required: true
 *         schema:
 *           type: integer
 *       - name: date
 *         in: query
 *         description: |
 *           Filter tickets by journey_date (YYYY-MM-DD)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of tickets for trip
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/trip/:tripId', authenticateToken, ticketController.getTicketForSpecificTrip);

/**
 * @swagger
 * /api/ticket/allocated-seats/trip/{tripId}:
 *   get:
 *     summary: Get allocated seat numbers for a specific trip (all dates)
 *     tags: [Ticket]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: tripId
 *         in: path
 *         description: Trip ID to retrieve allocated seats for
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of seat numbers currently allocated for the trip (all dates)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 allocatedSeats:
 *                   type: array
 *                   items:
 *                     type: integer
 *       400:
 *         description: Validation error or missing required fields
 */
router.get('/allocated-seats/trip/:tripId', authenticateToken, ticketController.getAllocatedSeatsByTrip);


/**
 * @swagger
 * /api/ticket/{id}:
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