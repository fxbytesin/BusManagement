const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const dashboardController=require('../controllers/dashboardController')

// Get dashboard statistics
router.get('/stats', authenticateToken, dashboardController.getdashboardStatistics );

// Get revenue report
router.get('/revenue', authenticateToken, dashboardController.getRevenueReport );

module.exports = router;