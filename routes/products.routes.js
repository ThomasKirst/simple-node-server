import express from 'express';
import {
  findProduct,
  listProducts,
  postProduct,
} from '../controller/products.controller.js';

const router = express.Router();

router.get('/products', listProducts);
router.get('/products/:productId', findProduct);
router.post('/products', postProduct);

export default router;
