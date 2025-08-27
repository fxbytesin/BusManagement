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
 * /conductor:
 *   get:
 *     summary: Get all conductors for the logged-in user
 *     tags: [Conductor]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of conductors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   experience_years:
 *                     type: integer
 *                   address:
 *                     type: string
 *                   emergency_contact:
 *                     type: string
 *                   active:
 *                     type: boolean
 */

/* Get all conductors */
router.get('/', authenticateToken, conductorController.getAllConductor);

/**
 * @swagger
 * /conductor:
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
 * /conductor/{id}:
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
 * /conductor/{id}:
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
