const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const customersRoutes = require('./routes/customers.routes');
const productsRoutes = require('./routes/products.routes');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(productsRoutes);
app.use(customersRoutes);

app.listen(4000, () => console.log('Server is started'));
