import express from 'express';
import {
  customerForm,
  postCustomer,
} from '../controller/customers.controller.js';

const router = express.Router();

router.get('/customers', customerForm);
router.post('/customers', postCustomer);

export default router;
