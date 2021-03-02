import { v4 as uuidv4 } from 'uuid';
import { loadFromDb, saveToDb } from '../lib/databaseHelpers.js';

function postProduct(request, response) {
  const newProduct = { ...request.body, id: uuidv4() };

  const database = loadFromDb();
  const products = database.products;
  products.push(newProduct);

  saveToDb(database);

  response.json(newProduct);
}

function listProducts(request, response) {
  const database = loadFromDb();
  response.json({ products: database.products });
}

function findProduct(request, response) {
  const { productId } = request.params;
  const database = loadFromDb();
  const productToReturn = database.products.find(
    (product) => product.id === productId
  );
  response.json(productToReturn);
}

export { postProduct, listProducts, findProduct };
