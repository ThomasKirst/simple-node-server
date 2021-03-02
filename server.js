const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const customersController = require('./controller/customers.controller');
const productsController = require('./controller/products.controller');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', productsController.productForm);
app.post('/products', productsController.postProduct);

app.get('/customers', customersController.customerForm);
app.post('/customers', customersController.postCustomer);

app.listen(4000, () => console.log('Server is started'));
