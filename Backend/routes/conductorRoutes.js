const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const conductorController=require("../controllers/conductorController");
/**
 * @swagger
 * tags:
 *   name: Conductor
 *   description: API for managing conductors
 */

/**
 * @swagger
 * /api/conductor/list:
 *   post:
 *     summary: Get all conductors for the logged-in user with search, pagination, and sorting
 *     tags: [Conductor]
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
 *                 description: Search by name, phone, or email
 *                 example: "John"
 *               limit:
 *                 type: integer
 *                 default: 10
 *                 description: Number of results per page
 *               page:
 *                 type: integer
 *                 default: 1
 *                 description: Page number
 *               order:
 *                 type: string
 *                 enum: [ASC, DESC]
 *                 default: ASC
 *                 description: Sort order
 *               orderColumn:
 *                 type: string
 *                 enum: [created_at, name, email, phone]
 *                 default: created_at
 *                 description: Column to sort by
 *     responses:
 *       200:
 *         description: List of conductors with pagination
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
 *                       phone:
 *                         type: string
 *                       email:
 *                         type: string
 *                       experience_years:
 *                         type: integer
 *                       address:
 *                         type: string
 *                       emergency_contact:
 *                         type: string
 *                       active:
 *                         type: boolean
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
 *       500:
 *         description: Internal server error
 */
router.post('/list', authenticateToken, conductorController.getAllConductor);

/**
 * @swagger
 * /api/conductor:
 *   post:
 *     summary: Create a new conductor
 *     tags: [Conductor]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Conductor object to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               experience_years:
 *                 type: integer
 *               address:
 *                 type: string
 *               emergency_contact:
 *                 type: string
 *     responses:
 *       201:
 *         description: Conductor created
 *       400:
 *         description: Validation error
 */

/* Create conductor */
router.post('/', authenticateToken, conductorController.createConductor);

/**
 * @swagger
 * /api/conductor/{id}:
 *   put:
 *     summary: Update a conductor by ID
 *     tags: [Conductor]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Conductor ID
 *     requestBody:
 *       description: Fields for conductor update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               experience_years:
 *                 type: integer
 *               address:
 *                 type: string
 *               emergency_contact:
 *                 type: string
 *               active:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Conductor updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Conductor not found
 */

/* Update conductor */
router.put('/:id', authenticateToken, conductorController.updateConductor );

/**
 * @swagger
 * /api/conductor/{id}:
 *   delete:
 *     summary: Delete a conductor by ID
 *     tags: [Conductor]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Conductor ID
 *     responses:
 *       200:
 *         description: Conductor deleted successfully
 *       404:
 *         description: Conductor not found
 */
router.delete('/:id', authenticateToken, conductorController.deleteConductor);

module.exports = router;
