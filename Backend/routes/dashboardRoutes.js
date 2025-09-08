const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const dashboardController = require('../controllers/dashboardController');

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard statistics and reports
 */

/**
 * @swagger
 * /api/dashboard/analytics:
 *   get:
 *     summary: Get analytics report for trips, occupancy, and revenue
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Analytics data for trips completed, tickets generated, occupancy rate, and revenue
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tripsAndTickets:
 *                   type: object
 *                   properties:
 *                     daily:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           bus_id:
 *                             type: integer
 *                           bus_number:
 *                             type: string
 *                           trips_completed:
 *                             type: integer
 *                           tickets_generated:
 *                             type: integer
 *                     weekly:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/TripsAndTickets'
 *                     monthly:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/TripsAndTickets'
 *                     yearly:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/TripsAndTickets'
 *                 occupancyRate:
 *                   type: object
 *                   properties:
 *                     daily:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           bus_id:
 *                             type: integer
 *                           bus_number:
 *                             type: string
 *                           capacity:
 *                             type: integer
 *                           booked_seats:
 *                             type: integer
 *                           occupancy_rate:
 *                             type: number
 *                             format: float
 *                     weekly:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/OccupancyRate'
 *                     monthly:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/OccupancyRate'
 *                     yearly:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/OccupancyRate'
 *                 revenue:
 *                   type: object
 *                   properties:
 *                     daily:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           bus_id:
 *                             type: integer
 *                           bus_number:
 *                             type: string
 *                           revenue:
 *                             type: number
 *                             format: float
 *                     weekly:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Revenue'
 *                     monthly:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Revenue'
 *                     yearly:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Revenue'
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       500:
 *         description: Internal server error
 *
 * components:
 *   schemas:
 *     TripsAndTickets:
 *       type: object
 *       properties:
 *         bus_id:
 *           type: integer
 *         bus_number:
 *           type: string
 *         trips_completed:
 *           type: integer
 *         tickets_generated:
 *           type: integer
 *     OccupancyRate:
 *       type: object
 *       properties:
 *         bus_id:
 *           type: integer
 *         bus_number:
 *           type: string
 *         capacity:
 *           type: integer
 *         booked_seats:
 *           type: integer
 *         occupancy_rate:
 *           type: number
 *           format: float
 *     Revenue:
 *       type: object
 *       properties:
 *         bus_id:
 *           type: integer
 *         bus_number:
 *           type: string
 *         revenue:
 *           type: number
 *           format: float
 */

router.get(
  '/analytics',
  authenticateToken,
  dashboardController.getTripsCompletedReport
);

module.exports = router;
