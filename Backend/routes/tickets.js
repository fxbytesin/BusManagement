const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const ticketController=require('../controllers/ticketController')

// Generate a simple ticket number
function generateTicketNumber() {
  return 'TKT-' + Date.now().toString().slice(-6); 
}

// Create ticket
router.post('/', authenticateToken,ticketController.createTicket );


// Get tickets for a specific bus
router.get('/bus/:busId', authenticateToken,ticketController.getTicketForSpecificBus );

//get specific ticket
router.get('/:id', authenticateToken, ticketController.viewTicket);

module.exports = router;