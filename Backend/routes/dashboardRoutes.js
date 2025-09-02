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
 * /api/dashboard/trips-completed:
 *   get:
 *     summary: Get count of trips completed by each bus filtered by period
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: period
 *         in: query
 *         description: Period to filter trip completion stats (daily, weekly, monthly, yearly)
 *         required: false
 *         schema:
 *           type: string
 *           enum: [daily, weekly, monthly, yearly]
 *           default: daily
 *     responses:
 *       200:
 *         description: Trips completed count per bus for the specified period
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   bus_id:
 *                     type: integer
 *                   bus_number:
 *                     type: string
 *                   trips_completed:
 *                     type: integer
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       500:
 *         description: Internal server error
 */

router.get(
  '/trips-completed',
  authenticateToken,
  dashboardController.getTripsCompletedReport
);

module.exports = router;
