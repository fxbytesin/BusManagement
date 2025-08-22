const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const routeController=require('../controllers/routeController')


// Get all routes for the authenticated user
router.get('/', authenticateToken, routeController.getAllRoutes);

// Create a route
router.post('/', authenticateToken, routeController.createRoute);

// Update a route
router.put('/:id', authenticateToken, routeController.updateRoute);

// Delete a route
router.delete('/:id', authenticateToken, routeController.deleteRoute);

module.exports = router;
