// Product model
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    rating: Number,
    image: String,
    category: String,
    brand: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Product", productSchema);
