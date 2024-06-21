const express = require('express');
const { createProduct } = require('../controllers/productController');
const router = express.Router();


router.route('/create-product').post(createProduct);


module.exports = router;