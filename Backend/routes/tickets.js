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
 * /api/ticket:
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
 *               - trip_id
 *               - from_stop
 *               - to_stop
 *               - fare
 *               - journey_date
 *               - pos_machine_id
 *             properties:
 *               bus_id:
 *                 type: integer
 *               trip_id:
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
 *         description: Bus, trip, or POS machine not found
 */
router.post('/', authenticateToken, ticketController.createTicket);

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
 *     summary: Get allocated seat numbers for a specific trip and journey date
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
 *       - name: date
 *         in: query
 *         description: |
 *           Date to filter tickets by (format: YYYY-MM-DD)
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of seat numbers currently allocated for the trip on the given date
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
 * /api/ticket/tickets-count-per-trip:
 *   get:
 *     summary: Get the number of tickets issued and allocated seats per trip on a specific date
 *     tags: [Ticket]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: date
 *         in: query
 *         description: |
 *           Date to filter tickets by (format: YYYY-MM-DD)
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of trips with count of tickets issued and allocated seat numbers on the given date
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   trip_id:
 *                     type: integer
 *                   tickets_issued:
 *                     type: integer
 *                   allocated_seats:
 *                     type: array
 *                     items:
 *                       type: integer
 *       400:
 *         description: Missing or invalid date parameter
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       500:
 *         description: Internal server error
 */
router.get('/tickets-count-per-trip', authenticateToken, ticketController.getAllocatedSeatsAndTicketCountPerTrip);

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
