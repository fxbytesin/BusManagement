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
 * /api/drivers/list:
 *   post:
 *     summary: Get all drivers with pagination, search, and sorting
 *     tags: [Driver]
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
 *                 description: Search by driver name or phone
 *                 example: "John"
 *               limit:
 *                 type: integer
 *                 description: Number of records per page
 *                 example: 10
 *               page:
 *                 type: integer
 *                 description: Page number (starts from 1)
 *                 example: 1
 *               order:
 *                 type: string
 *                 enum: [ASC, DESC]
 *                 description: Sorting order
 *                 example: ASC
 *               orderColumn:
 *                 type: string
 *                 enum: [created_at, name, email, phone, license_number]
 *                 description: Column to sort by
 *                 example: created_at
 *     responses:
 *       200:
 *         description: List of drivers with pagination
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
 *                       email:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       license_number:
 *                         type: string
 *                       license_expiry:
 *                         type: string
 *                         format: date-time
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
 *                       description: Total number of drivers
 *                     page:
 *                       type: integer
 *                       description: Current page number
 *                     limit:
 *                       type: integer
 *                       description: Number of records per page
 *                     totalPages:
 *                       type: integer
 *                       description: Total number of pages
 *       404:
 *         description: No drivers found matching the search
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: No drivers found matching "John"
 *       500:
 *         description: Internal server error
 */

router.post('/list', authenticateToken, driverController.getAllDriver);


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
