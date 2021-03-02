import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import customersRoutes from './routes/customers.routes.js';
import productsRoutes from './routes/products.routes.js';

app.use(bodyParser.urlencoded({ extended: false }));

app.use(productsRoutes);
app.use(customersRoutes);

app.listen(4000, () => console.log('Server is started'));
