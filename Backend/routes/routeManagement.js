const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const routeController=require('../controllers/routeController')


/**
 * @swagger
 * tags:
 *   name: Route
 *   description: Route management APIs
 */

/**
 * @swagger
 * /route:
 *   get:
 *     summary: Get all routes belonging to authenticated user
 *     tags: [Route]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of routes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */

router.get('/', authenticateToken, routeController.getAllRoutes);

/**
 * @swagger
 * /route:
 *   post:
 *     summary: Create a new route
 *     tags: [Route]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Route data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - code
 *               - distance
 *               - base_fare
 *               - per_km_rate
 *               - stops
 *             properties:
 *               name:
 *                 type: string
 *               code:
 *                 type: string
 *               distance:
 *                 type: number
 *               base_fare:
 *                 type: number
 *               per_km_rate:
 *                 type: number
 *               stops:
 *                 type: array
 *                 items:
 *                   type: string
 *               active:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Route created successfully
 *       400:
 *         description: Validation or uniqueness error
 */
router.post('/', authenticateToken, routeController.createRoute);

/**
 * @swagger
 * /route/{id}:
 *   put:
 *     summary: Update a route by ID
 *     tags: [Route]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Route ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Route fields to update
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               name:
 *                 type: string
 *               code:
 *                 type: string
 *               distance:
 *                 type: number
 *               base_fare:
 *                 type: number
 *               per_km_rate:
 *                 type: number
 *               stops:
 *                 type: array
 *                 items:
 *                   type: string
 *               active:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Route updated successfully
 *       404:
 *         description: Route not found
 */

router.put('/:id', authenticateToken, routeController.updateRoute);

/**
 * @swagger
 * /route/{id}:
 *   delete:
 *     summary: Delete a route by ID
 *     tags: [Route]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Route ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Route deleted successfully
 *       404:
 *         description: Route not found
 */
router.delete('/:id', authenticateToken, routeController.deleteRoute);

module.exports = router;
