const express = require('express');
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
} = require('../controllers/cartController');

// GET user cart
router.get('/:userId', getCart);

// POST add item to cart
router.post('/:userId', addToCart);

// PUT update item quantity (must not go below 0)
router.put('/:userId/:productId', updateCartItem);

// DELETE remove item from cart
router.delete('/:userId/:productId', removeFromCart);

module.exports = router;
