const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const conductorController=require("../controllers/conductorController");


// Get all conductors
router.get('/', authenticateToken, conductorController.getAllConductor);

// Create conductor
router.post('/', authenticateToken, conductorController.createConductor);

// Update conductor
router.put('/:id', authenticateToken, conductorController.updateConductor );

// Delete conductor
router.delete('/:id', authenticateToken, conductorController.deleteConductor);


module.exports = router;
