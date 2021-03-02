import express from 'express';
import { postProduct, productForm } from '../controller/products.controller.js';

const router = express.Router();

router.get('/products', productForm);
router.post('/products', postProduct);

export default router;
