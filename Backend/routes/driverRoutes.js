const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const driverController=require('../controllers/driverController')

/**
 * @swagger
 * tags:
 *   name: Driver
 *   description: Driver management APIs
 */

/**
 * @swagger
 * /api/drivers:
 *   get:
 *     summary: Get all drivers for the authenticated user
 *     tags: [Driver]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of drivers
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
 *                   license_number:
 *                     type: string
 *                   license_expiry:
 *                     type: string
 *                     format: date-time
 *                   experience_years:
 *                     type: integer
 *                   address:
 *                     type: string
 *                   emergency_contact:
 *                     type: string
 *                   active:
 *                     type: boolean
 */

/* Get all drivers */
router.post('/', authenticateToken, driverController.getAllDriver);


/**
 * @swagger
 * /api/drivers:
 *   post:
 *     summary: Create a new driver
 *     tags: [Driver]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Driver information for creation
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - license_number
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               license_number:
 *                 type: string
 *               license_expiry:
 *                 type: string
 *                 format: date-time
 *               experience_years:
 *                 type: integer
 *               address:
 *                 type: string
 *               emergency_contact:
 *                 type: string
 *     responses:
 *       201:
 *         description: Driver created successfully
 *       400:
 *         description: Validation error
 */

/* Create driver */
router.post('/', authenticateToken, driverController.createDriver);

/**
 * @swagger
 * /api/drivers/{id}:
 *   put:
 *     summary: Update existing driver by ID
 *     tags: [Driver]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Driver ID to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Driver fields to update
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
 *               license_number:
 *                 type: string
 *               license_expiry:
 *                 type: string
 *                 format: date-time
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
 *         description: Driver updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Driver not found
 */

/* Update driver */
router.put('/:id', authenticateToken, driverController.updateDriver);

/**
 * @swagger
 * /api/drivers/{id}:
 *   delete:
 *     summary: Delete a driver by ID
 *     tags: [Driver]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Driver ID to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Driver deleted successfully
 *       404:
 *         description: Driver not found
 */

/* Delete driver */
router.delete('/:id', authenticateToken, driverController.deleteDriver);

module.exports = router;
