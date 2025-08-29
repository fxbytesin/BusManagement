const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const dashboardController=require('../controllers/dashboardController')

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard statistics and reports
 */

/**
 * @swagger
 * /api/dashboard/stats:
 *   get:
 *     summary: Get dashboard overview and bus-specific stats for a given period
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: period
 *         in: query
 *         description: Period to filter stats by (daily, weekly, monthly, yearly)
 *         required: false
 *         schema:
 *           type: string
 *           enum: [daily, weekly, monthly, yearly]
 *           default: daily
 *     responses:
 *       200:
 *         description: Dashboard statistics overview for the specified period
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 overview:
 *                   type: object
 *                   properties:
 *                     total_buses:
 *                       type: integer
 *                     active_buses:
 *                       type: integer
 *                     today_revenue:
 *                       type: number
 *                     today_passengers:
 *                       type: integer
 *                     today_packages:
 *                       type: integer
 *                 buses:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       bus_number:
 *                         type: string
 *                       status:
 *                         type: string
 *                       capacity:
 *                         type: integer
 *                       current_location:
 *                         type: string
 *                       route_name:
 *                         type: string
 *                       today_passengers:
 *                         type: integer
 *                       today_revenue:
 *                         type: number
 *                       today_packages:
 *                         type: integer
 *                       occupancy_rate:
 *                         type: number
 *                         description: Percentage of seat occupancy (0-100)
 *       400:
 *         description: Invalid period parameter
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       500:
 *         description: Internal server error
 */
router.get('/stats', authenticateToken, dashboardController.getdashboardStatistics);


/**
 * @swagger
 * /api/dashboard/revenue:
 *   get:
 *     summary: Get revenue report between dates, optionally filtered by bus
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: startDate
 *         in: query
 *         required: true
 *         description: Start date in YYYY-MM-DD format
 *         schema:
 *           type: string
 *           format: date
 *       - name: endDate
 *         in: query
 *         required: true
 *         description: End date in YYYY-MM-DD format
 *         schema:
 *           type: string
 *           format: date
 *       - name: busId
 *         in: query
 *         required: false
 *         description: Optional bus ID to filter revenue report
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Revenue report data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   date:
 *                     type: string
 *                     format: date
 *                   ticket_revenue:
 *                     type: number
 *                   package_revenue:
 *                     type: number
 *                   total_tickets:
 *                     type: integer
 *                   total_packages:
 *                     type: integer
 */
router.get('/revenue', authenticateToken, dashboardController.getRevenueReport );

module.exports = router;