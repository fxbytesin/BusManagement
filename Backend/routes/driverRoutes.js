const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const driverController=require('../controllers/driverController')

// Get all drivers
router.get('/', authenticateToken, driverController.getAllDriver);

// Create driver
router.post('/', authenticateToken, driverController.createDriver);

// Update driver
router.put('/:id', authenticateToken, driverController.updateDriver);

// Delete driver
router.delete('/:id', authenticateToken, driverController.deleteDriver);

module.exports = router;
