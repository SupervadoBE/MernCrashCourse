import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRouter from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.use("/api/products", productRouter);

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
