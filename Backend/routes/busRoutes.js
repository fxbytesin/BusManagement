const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const busController=require('../controllers/busController')

// Get all buses with related data
router.get('/', authenticateToken, busController.getAllBuses);

// Create a new bus
router.post('/', authenticateToken, busController.createBus);

// Update a bus
router.put('/:id', authenticateToken, busController.updateBus);

// Delete a bus
router.delete('/:id', authenticateToken, busController.deleteBus);

module.exports = router;