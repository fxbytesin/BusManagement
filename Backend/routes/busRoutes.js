const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const busController=require('../controllers/busController')

/**
 * @swagger
 * tags:
 *   name: Bus
 *   description: Bus management APIs
 */

/**
 * @swagger
 * /bus:
 *   get:
 *     summary: Get all buses
 *     tags: [Bus]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of buses with related info
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', authenticateToken, busController.getAllBuses);

/**
 * @swagger
 * /bus:
 *   post:
 *     summary: Create a new bus
 *     tags: [Bus]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Bus details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bus_number
 *               - capacity
 *             properties:
 *               bus_number:
 *                 type: string
 *               capacity:
 *                 type: integer
 *               route_id:
 *                 type: integer
 *               driver_id:
 *                 type: integer
 *               conductor_id:
 *                 type: integer
 *               status:
 *                 type: string
 *                 enum: [running, stopped, maintenance]
 *               current_location:
 *                 type: string
 *     responses:
 *       201:
 *         description: Bus created successfully
 *       400:
 *         description: Input error
 */
router.post('/', authenticateToken, busController.createBus);

/**
 * @swagger
 * /bus/{id}:
 *   put:
 *     summary: Update a bus
 *     tags: [Bus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Bus ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Fields to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bus_number:
 *                 type: string
 *               capacity:
 *                 type: integer
 *               route_id:
 *                 type: integer
 *               driver_id:
 *                 type: integer
 *               conductor_id:
 *                 type: integer
 *               status:
 *                 type: string
 *                 enum: [running, stopped, maintenance]
 *               current_location:
 *                 type: string
 *     responses:
 *       200:
 *         description: Bus updated successfully
 *       404:
 *         description: Bus not found
 */
router.put('/:id', authenticateToken, busController.updateBus);

/**
 * @swagger
 * /bus/{id}:
 *   delete:
 *     summary: Delete a bus
 *     tags: [Bus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Bus ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Bus deleted successfully
 *       404:
 *         description: Bus not found
 */
router.delete('/:id', authenticateToken, busController.deleteBus);

module.exports = router;

