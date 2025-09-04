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
 * /api/bus/list:
 *   post:
 *     summary: Get all buses with search, pagination, and sorting
 *     tags: [Bus]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               search:
 *                 type: string
 *                 description: Search by bus number, route name/code, driver or conductor name
 *               limit:
 *                 type: integer
 *                 default: 10
 *                 minimum: 1
 *                 description: Number of results per page
 *               page:
 *                 type: integer
 *                 default: 1
 *                 minimum: 1
 *                 description: Page number
 *               order:
 *                 type: string
 *                 enum: [ASC, DESC]
 *                 default: ASC
 *                 description: Sort order (ASC for ascending, DESC for descending)
 *               orderColumn:
 *                 type: string
 *                 default: created_at
 *                 description: Column to sort by
 *     responses:
 *       200:
 *         description: List of buses with related info and pagination
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       bus_number:
 *                         type: string
 *                       route_name:
 *                         type: string
 *                         nullable: true
 *                       route_code:
 *                         type: string
 *                         nullable: true
 *                       driver_name:
 *                         type: string
 *                         nullable: true
 *                       conductor_name:
 *                         type: string
 *                         nullable: true
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/list', authenticateToken, busController.getAllBuses);

/**
 * @swagger
 * /api/bus:
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
 * /api/bus/{id}:
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
 * /api/bus/{id}:
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

