import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import customersRoutes from './routes/customers.routes.js';
import productsRoutes from './routes/products.routes.js';

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.json({ status: 'Server is up and running.' });
});

app.use(productsRoutes);
app.use(customersRoutes);

app.listen(4000, () => console.log('Server is started'));
