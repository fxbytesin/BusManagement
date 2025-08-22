const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const packageController=require('../controllers/packageController')

// Create package booking
router.post('/', authenticateToken, packageController.createPackage);

// Get packages for a bus
router.get('/bus/:busId', authenticateToken, packageController.getPackage);

// Update package status
router.put('/:id/status', authenticateToken, packageController.updatePackage);

module.exports = router;