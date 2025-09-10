const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/authMiddleware");
const reportController = require("../controllers/reportController");

/**
 * @swagger
 * tags:
 *   - name: Reports
 *     description: Report and Export APIs
 */

/**
 * @swagger
 * /api/report/tickets/export:
 *   post:
 *     summary: Export tickets for a specific bus within a date range
 *     tags: [Reports]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bus_id
 *               - start_time
 *               - end_time
 *             properties:
 *               bus_id:
 *                 type: integer
 *                 example: 12
 *                 description: ID of the bus
 *               start_time:
 *                 type: string
 *                 format: date
 *                 example: "2025-09-01"
 *                 description: Start date in YYYY-MM-DD format
 *               end_time:
 *                 type: string
 *                 format: date
 *                 example: "2025-09-10"
 *                 description: End date in YYYY-MM-DD format
 *     responses:
 *       200:
 *         description: CSV file containing exported tickets
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *               format: binary
 *       400:
 *         description: Missing required parameters (bus_id, start_time, end_time)
 *       404:
 *         description: No tickets found for the given bus and date range
 *       500:
 *         description: Internal server error
 */

router.post("/tickets/export", authenticateToken, reportController.exportTickets);

module.exports = router;
