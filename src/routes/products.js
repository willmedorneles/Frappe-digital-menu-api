import express from "express";
import { getProductsByCategory } from "./../controllers/product-controller.js";

const router = express.Router();

router.get("/products", getProductsByCategory);

// Export the router
export default { path: "/api", router };
