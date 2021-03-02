import express from 'express';
import { postProduct, productForm } from '../controller/products.controller.js';

const router = express.Router();

router.get('/', productForm);
router.post('/products', postProduct);

export default router;
