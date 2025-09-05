const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require("../middlewares/authMiddleware");
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management (drivers and conductors)
 */

/**
 * @swagger
 * /api/user/list:
 *   post:
 *     summary: Get users by role with pagination and search (auth required)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 enum: [driver, conductor]
 *               search:
 *                 type: string
 *               limit:
 *                 type: integer
 *                 default: 10
 *               page:
 *                 type: integer
 *                 default: 1
 *               order:
 *                 type: string
 *                 enum: [ASC, DESC]
 *                 default: ASC
 *               orderColumn:
 *                 type: string
 *                 enum: [created_at, name, email, phone]
 *                 default: created_at
 *     responses:
 *       200:
 *         description: List of users by role
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
 *                       id: { type: integer }
 *                       name: { type: string }
 *                       phone: { type: string }
 *                       role:
 *                         type: string
 *                         enum: [driver, conductor]
 *                       experience_years: { type: integer }
 *                       address: { type: string }
 *                       emergency_contact: { type: string }
 *                       license_number: { type: string }
 *                       license_expiry:
 *                         type: string
 *                         format: date-time
 *                       active: { type: boolean }
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total: { type: integer }
 *                     page: { type: integer }
 *                     limit: { type: integer }
 *                     totalPages: { type: integer }
 */
router.post('/list', authenticateToken, userController.getUsersByRole);

/**
 * @swagger
 * /api/user/create:
 *   post:
 *     summary: Create a user (driver or conductor) — admin only (auth required)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - role
 *             properties:
 *               name: { type: string }
 *               phone: { type: string }
 *               role:
 *                 type: string
 *                 enum: [driver, conductor]
 *               experience_years: { type: integer }
 *               address: { type: string }
 *               emergency_contact: { type: string }
 *               license_number: { type: string }
 *               license_expiry:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Created user object (is_verified set true if created by admin)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id: { type: integer }
 *                 name: { type: string }
 *                 phone: { type: string }
 *                 role:
 *                   type: string
 *                   enum: [driver, conductor]
 *                 is_verified: { type: boolean }
 *                 experience_years: { type: integer }
 *                 address: { type: string }
 *                 emergency_contact: { type: string }
 *                 license_number:
 *                   type: string
 *                   nullable: true
 *                 license_expiry:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                 active: { type: boolean }
 */
router.post('/create', authenticateToken, userController.createUser);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Update a user by ID (admin only, auth required)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
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
 *               license_number:
 *                 type: string
 *               license_expiry:
 *                 type: string
 *                 format: date-time
 *               active:
 *                 type: boolean
 *               is_verified:
 *                 type: boolean
 *                 description: Only admin can update verification status
 *     responses:
 *       200:
 *         description: Updated user object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 role:
 *                   type: string
 *                   enum: [driver, conductor]
 *                 is_verified:
 *                   type: boolean
 *                 experience_years:
 *                   type: integer
 *                 address:
 *                   type: string
 *                 emergency_contact:
 *                   type: string
 *                 license_number:
 *                   type: string
 *                 license_expiry:
 *                   type: string
 *                   format: date-time
 *                 active:
 *                   type: boolean
 *       403:
 *         description: Forbidden — only admin can update users
 *       404:
 *         description: User not found
 */
router.put('/user/:id', authenticateToken, userController.updateUser);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Delete a user by ID (auth required)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete('/user/:id', authenticateToken, userController.deleteUser);

module.exports = router;
