const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/authMiddleware");
const tripController = require("../controllers/tripController");

/**
 * @swagger
 * tags:
 *   name: Trip
 *   description: Trip management APIs
 */

/**
 * @swagger
 * /api/trip:
 *   post:
 *     summary: Create a Trip
 *     tags: [Trip]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Trip creation details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bus_id
 *               - start_time
 *             properties:
 *               bus_id:
 *                 type: integer
 *                 example: 1
 *               start_time:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-08-29T08:00:00Z"
 *               end_time:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-08-29T12:00:00Z"
 *               status:
 *                 type: string
 *                 example: "SCHEDULED"
 *                 enum: [SCHEDULED, RUNNING, COMPLETED, CANCELLED]
 *     responses:
 *       201:
 *         description: Trip created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Trip'
 *       400:
 *         description: Validation error
 *       404:
 *         description: Bus not found
 */
router.post("/", authenticateToken, tripController.createTrip);


/**
 * @swagger
 * /api/trip:
 *   get:
 *     summary: Get all Trips
 *     tags: [Trip]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of Trips
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", authenticateToken, tripController.getAllTrips);
/**
 * @swagger
 * /api/trip/{id}:
 *   get:
 *     summary: Get Trip by ID
 *     tags: [Trip]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Trip ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Trip details
 *       404:
 *         description: Trip not found
 */
router.get("/:id", authenticateToken, tripController.getTripById);


/**
 * @swagger
 * /api/trip/{id}:
 *   put:
 *     summary: Update an existing Trip
 *     tags: [Trip]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Trip ID to update
 *     requestBody:
 *       description: Trip update details (bus_id cannot be changed)
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               start_time:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-08-29T08:00:00Z"
 *               end_time:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-08-29T12:00:00Z"
 *               status:
 *                 type: string
 *                 example: "RUNNING"
 *                 enum: [SCHEDULED, RUNNING, COMPLETED, CANCELLED]
 *     responses:
 *       200:
 *         description: Trip updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Trip'
 *       400:
 *         description: Validation error
 *       404:
 *         description: Trip not found
 */
router.put("/:id", authenticateToken, tripController.updateTrip);
/**
 * @swagger
 * /api/trip/{id}:
 *   delete:
 *     summary: Delete Trip
 *     tags: [Trip]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Trip ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Trip deleted successfully
 *       404:
 *         description: Trip not found
 */
router.delete("/:id", authenticateToken, tripController.deleteTrip);

module.exports = router;
