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
 *     summary: Get today's dashboard overview and bus-specific stats
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard statistics overview
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
 */
router.get('/stats', authenticateToken, dashboardController.getdashboardStatistics );

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