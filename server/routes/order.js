const express = require('express');
const router = express.Router();
const {
  placeOrder,
  getUserOrders,
  getAllOrders,
} = require('../controllers/orderController');

// POST place an order
router.post('/:userId', placeOrder);

// GET orders of a specific user
router.get('/user/:userId', getUserOrders);

// GET all orders (admin use)
router.get('/', getAllOrders);

module.exports = router;
