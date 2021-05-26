import { v4 as uuidv4 } from 'uuid';
import { loadFromDb, saveToDb } from '../lib/databaseHelpers.js';

async function postProduct(request, response) {
  const newProduct = { ...request.body, id: uuidv4() };

  const database = await loadFromDb();
  const products = database.products;
  products.push(newProduct);

  try {
    const result = await saveToDb(database);
    if (result) {
      response.json(newProduct);
    } else {
      response.json({
        success: false,
        message: 'Database could not be written.',
      });
    }
  } catch (error) {
    response.json({ success: false, message: error.message });
  }
}

async function listProducts(request, response) {
  const database = await loadFromDb();
  response.json({ products: database.products });
}

async function findProduct(request, response) {
  const { productId } = request.params;
  const database = await loadFromDb();
  const productToReturn = database.products.find(
    (product) => product.id === productId
  );
  response.json(productToReturn);
}

export { postProduct, listProducts, findProduct };
