const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/authMiddleware");
const posController = require("../controllers/posController");

/**
 * @swagger
 * tags:
 *   name: POSMachine
 *   description: POS Machine management APIs
 */

/**
 * @swagger
 * /api/pos/create:
 *   post:
 *     summary: Create a POS machine
 *     tags: [POSMachine]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: POS machine details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - serial_no
 *             properties:
 *               serial_no:
 *                 type: string
 *                 example: "POS123456"
 *               status:
 *                 type: string
 *                 example: "active"
 *                 enum: [active, maintenance, inactive]
 *     responses:
 *       201:
 *         description: POS machine created
 *       400:
 *         description: Serial number already exists or validation error
 */
router.post("/create", authenticateToken, posController.createPOSMachine);

/**
 * @swagger
 * /api/pos/list:
 *   post:
 *     summary: Get all POS machines including their assigned bus (with search, pagination, and sorting)
 *     tags: [POSMachine]
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
 *                 description: Search by POS serial number
 *                 example: "POS123"
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
 *                 enum: [created_at, serial_number, status]
 *                 default: created_at
 *                 description: Column to sort by
 *     responses:
 *       200:
 *         description: List of POS machines with bus info and pagination
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
 *                       serial_no:
 *                         type: string
 *                       status:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       bus:
 *                         type: object
 *                         nullable: true
 *                         properties:
 *                           id:
 *                             type: integer
 *                           bus_number:
 *                             type: string
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
 *         description: No POS machines found for the given search
 *       500:
 *         description: Internal server error
 */
router.post("/list", authenticateToken, posController.getAllPOSMachines);

/**
 * @swagger
 * /api/pos/{id}:
 *   get:
 *     summary: Get a POS machine by ID with bus info
 *     tags: [POSMachine]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: POS machine ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: POS machine details
 *       404:
 *         description: POS machine not found
 */
router.get("/:id", authenticateToken, posController.getPOSMachineById);

/**
 * @swagger
 * /api/pos/{id}:
 *   put:
 *     summary: Update POS machine details
 *     tags: [POSMachine]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: POS machine ID
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
 *               serial_no:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [active, maintenance, inactive]
 *               bus_id:
 *                 type: integer
 *               assigned:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: POS machine updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: POS machine not found
 */
router.put("/:id", authenticateToken, posController.updatePOSMachine);

/**
 * @swagger
 * /api/pos/{id}:
 *   delete:
 *     summary: Delete POS machine by ID
 *     tags: [POSMachine]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: POS machine ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: POS machine deleted successfully
 *       404:
 *         description: POS machine not found
 */
router.delete("/:id", authenticateToken, posController.deletePOSMachine);

module.exports = router;
  