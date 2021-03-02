const express = require('express');
const productsController = require('../controller/products.controller');
const router = express.Router();

router.get('/', productsController.productForm);

router.post('/products', productsController.postProduct);

module.exports = router;
