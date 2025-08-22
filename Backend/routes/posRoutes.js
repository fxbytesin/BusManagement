const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/authMiddleware");
const posController = require("../controllers/posController");

// Create POS machine
router.post("/create", authenticateToken, posController.createPOSMachine);

// Get all POS machines
router.get("/all", authenticateToken, posController.getAllPOSMachines);

// Get POS machine by ID
router.get("/:id", authenticateToken, posController.getPOSMachineById);

// Update POS machine
router.put("/:id", authenticateToken, posController.updatePOSMachine);

// Delete POS machine
router.delete("/:id", authenticateToken, posController.deletePOSMachine);

module.exports = router;
