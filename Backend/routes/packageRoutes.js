const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const packageController=require('../controllers/packageController')

/**
 * @swagger
 * tags:
 *   name: Package
 *   description: Package booking and management APIs
 */

/**
 * @swagger
 * /package:
 *   post:
 *     summary: Create a new package booking
 *     tags: [Package]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Package booking details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bus_id
 *               - sender_name
 *               - sender_phone
 *               - receiver_name
 *               - receiver_phone
 *               - from_stop
 *               - to_stop
 *               - fare
 *             properties:
 *               bus_id:
 *                 type: integer
 *               sender_name:
 *                 type: string
 *               sender_phone:
 *                 type: string
 *               receiver_name:
 *                 type: string
 *               receiver_phone:
 *                 type: string
 *               from_stop:
 *                 type: string
 *               to_stop:
 *                 type: string
 *               description:
 *                 type: string
 *               weight:
 *                 type: number
 *                 format: float
 *               fare:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: Package booked successfully
 *       400:
 *         description: Validation or input error
 *       404:
 *         description: Bus not found
 */
router.post('/', authenticateToken, packageController.createPackage);

/**
 * @swagger
 * /package/bus/{busId}:
 *   get:
 *     summary: Get packages booked for a specific bus, optionally filtered by status
 *     tags: [Package]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: busId
 *         in: path
 *         required: true
 *         description: Bus ID to fetch packages for
 *         schema:
 *           type: integer
 *       - name: status
 *         in: query
 *         required: false
 *         description: Filter packages by status (booked, in_transit, delivered, cancelled)
 *         schema:
 *           type: string
 *           enum: [booked, in_transit, delivered, cancelled]
 *     responses:
 *       200:
 *         description: List of packages for the bus
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/bus/:busId', authenticateToken, packageController.getPackage);

/**
 * @swagger
 * /package/{id}/status:
 *   put:
 *     summary: Update status of a package booking
 *     tags: [Package]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Package ID to update status
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: New status of the package
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
 *                 enum: [booked, in_transit, delivered, cancelled]
 *     responses:
 *       200:
 *         description: Package status updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Package not found
 */
router.put('/:id/status', authenticateToken, packageController.updatePackage);

module.exports = router;