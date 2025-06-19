import express from "express";

import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts); // Use the controller function to handle GET requests

router.post("/", createProduct); // Use the controller function to handle POST requests

router.put("/:id", updateProduct); // Use the controller function to handle PUT requests

router.delete("/:id", deleteProduct); // Use the controller function to handle DELETE requests

export default router;
