// productController.js
import { getRawProductData } from "./../models/product-model.js";
import { formatProductData } from "./../utils/product-utils.js";

async function getProductsByCategory(req, res, next) {
  try {
    const products = await getRawProductData(); // assuming this function returns a promise
    res.json(formatProductData(products));
  } catch (error) {
    console.error("Error in getProductsByCategory:", error);
    res.status(500).send("Error fetching products");
  }
}

export { getProductsByCategory };
