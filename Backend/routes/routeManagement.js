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
 * /api/routes:
 *   get:
 *     summary: Get all routes belonging to authenticated user with search, pagination, and sorting
 *     tags: [Route]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by route name or code
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of results per page
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *           default: ASC
 *         description: Sort order
 *       - in: query
 *         name: orderColumn
 *         schema:
 *           type: string
 *           enum: [created_at, name, code]
 *           default: created_at
 *         description: Column to sort by
 *     responses:
 *       200:
 *         description: List of routes with pagination
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
 *                         type: integer
 *                       name:
 *                         type: string
 *                       code:
 *                         type: string
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
 *       404:
 *         description: No routes found for the given search
 *       500:
 *         description: Internal server error
 */


router.post('/', authenticateToken, routeController.getAllRoutes);

/**
 * @swagger
 * /api/routes:
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
 * /api/routes/{id}:
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
 * /api/routes/{id}:
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
