const express = require('express');
const customersController = require('../controller/customers.controller');

const router = express.Router();

router.get('/customers', customersController.customerForm);
router.post('/customers', customersController.postCustomer);

module.exports = router;
