const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const multer = require('multer');
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById
} = require('../controllers/productController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Wrap routes in a function to accept io
module.exports = (io) => {
  // GET all products
  router.get('/', getAllProducts);

  router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const regex = new RegExp(query, 'i'); // case-insensitive
    const products = await Product.find({
      $or: [
        { title: { $regex: regex } },
        { description: { $regex: regex } }
      ]
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error searching products', error: err.message });
  }
});

  // GET one product by ID (to hook into real-time viewing if needed)
  router.get('/:id', getProductById);

  // POST add product
  router.post('/', upload.single('image'), addProduct);

  // PUT update product
  router.put('/:id', upload.single('image'), updateProduct);

  // DELETE product
  router.delete('/:id', deleteProduct);



  return router;
};
