require("dotenv").config();

const mongoose = require("mongoose");

const Product = require("../models/product.model");

const products = [
  {
    title: "Kids Toy Car",
    price: 499,
    rating: 4.5,
    image: "https://via.placeholder.com/300",
    category: "Toys",
    brand: "FunSkool",
  },
  {
    title: "Baby Dress",
    price: 799,
    rating: 4.2,
    image: "https://via.placeholder.com/300",
    category: "Clothing",
    brand: "Hopscotch",
  },
  {
    title: "Building Blocks",
    price: 999,
    rating: 4.8,
    image: "https://via.placeholder.com/300",
    category: "Toys",
    brand: "LEGO",
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

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
