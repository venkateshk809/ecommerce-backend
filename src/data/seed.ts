require("dotenv").config();

import mongoose from "mongoose";
import { products } from "./products";

import Product from "../models/product.model";

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    console.log("MongoDB connected");

    await Product.deleteMany();

    console.log("Existing products deleted");

    await Product.insertMany(products);

    console.log("Products seeded successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();
