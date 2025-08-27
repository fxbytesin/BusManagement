const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication and OTP management
 */

/**
 * @swagger
 * /register/request:
 *   post:
 *     summary: Request OTP for user registration
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *               - role
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               company_name:
 *                 type: string
 *                 example: "FX Bytes Ltd"
 *               role:
 *                 type: string
 *                 example: "conductor"
 *                 enum: [admin, conductor]
 *     responses:
 *       200:
 *         description: OTP sent for registration
 *       400:
 *         description: Bad request
 */
/* Request Registration OTP */
router.post("/register/request", auth.requestRegistrationOTP);

/**
 * @swagger
 * /register/verify:
 *   post:
 *     summary: Verify registration OTP
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *               - otp
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *               otp:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Registration verified, user created
 *       400:
 *         description: Invalid or expired OTP
 *       404:
 *         description: User not found
 */
/* Verify Registration OTP */
router.post("/register/verify", auth.verifyRegistrationOTP);

/**
 * @swagger
 * /login/request:
 *   post:
 *     summary: Request OTP for user login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *     responses:
 *       200:
 *         description: OTP sent for login
 *       400:
 *         description: Bad request
 *       404:
 *         description: User not found or not verified
 */
/* Request Login OTP */
router.post("/login/request", auth.requestLoginOTP);

/**
 * @swagger
 * /login/verify:
 *   post:
 *     summary: Verify login OTP and get token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *               - otp
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *               otp:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Login successful, JWT token returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *       400:
 *         description: Invalid or expired OTP
 *       404:
 *         description: User not found or not verified
 */
/* Verify Login OTP */
router.post("/login/verify", auth.verifyLoginOTP);

module.exports = router;

