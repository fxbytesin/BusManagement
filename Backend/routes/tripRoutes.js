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
 *       description: Trip details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bus_id
 *               - route_id
 *               - start_time
 *             properties:
 *               bus_id:
 *                 type: integer
 *                 example: 1
 *               route_id:
 *                 type: integer
 *                 example: 2
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
 *               driver_id:
 *                 type: integer
 *               conductor_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Trip created successfully
 *       400:
 *         description: Validation error
 */
router.post("/", authenticateToken, tripController.createTrip);

/**
* @swagger
* /api/trip/list:
*   post:
*     summary: Get all Trips with filters and pagination
*     tags: [Trip]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               search:
*                 type: string
*                 example: ""
*                 description: Search keyword for name, destination, or description
*               limit:
*                 type: integer
*                 default: 10
*                 example: 10
*                 description: Number of trips per page
*               page:
*                 type: integer
*                 default: 1
*                 example: 1
*                 description: Page number
*               order:
*                 type: string
*                 enum: [ASC, DESC]
*                 default: DESC
*                 example: ASC
*                 description: Sort order
*               orderColumn:
*                 type: string
*                 enum: [start_time, end_time, name, destination, created_at]
*                 default: created_at
*                 example: created_at
*                 description: Column to sort by
*     responses:
*       200:
*         description: List of Trips with pagination metadata
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 trips:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       id:
*                         type: integer
*                       name:
*                         type: string
*                       destination:
*                         type: string
*                       description:
*                         type: string
*                       start_time:
*                         type: string
*                         format: date-time
*                       end_time:
*                         type: string
*                         format: date-time
*                       created_at:
*                         type: string
*                         format: date-time
*                 pagination:
*                   type: object
*                   properties:
*                     currentPage:
*                       type: integer
*                     totalPages:
*                       type: integer
*                     totalCount:
*                       type: integer
*                     hasNextPage:
*                       type: boolean
*                     hasPrevPage:
*                       type: boolean
*                     limit:
*                       type: integer
*/
router.post("/list", authenticateToken, tripController.getAllTrips);

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
 *     summary: Update Trip
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
 *     requestBody:
 *       description: Trip fields to update
 *       required: truegetAllTrips
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bus_id:
 *                 type: integer
 *               route_id:
 *                 type: integer
 *               start_time:
 *                 type: string
 *                 format: date-time
 *               end_time:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *                 enum: [SCHEDULED, RUNNING, COMPLETED, CANCELLED]
 *               driver_id:
 *                 type: integer
 *               conductor_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Trip updated successfully
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

/**
 * @swagger
 * /api/trip/{id}/status:
 *   patch:
 *     summary: Update Trip Status
 *     tags: [Trip]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Trip ID
 *     requestBody:
 *       description: New trip status
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [SCHEDULED, RUNNING, COMPLETED, CANCELLED]
 *                 example: RUNNING
 *     responses:
 *       200:
 *         description: Trip status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 trip:
 *                   type: object
 *       400:
 *         description: Invalid status or validation error
 *       404:
 *         description: Trip not found
 */
router.patch("/:id/status", authenticateToken, tripController.updateTripStatus);

module.exports = router;
