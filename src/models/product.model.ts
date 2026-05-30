// Product model
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    rating: Number,
    image: String,
    category: String,
    brand: String,
    slug: String,
    description: String,
    originalPrice: Number,
    discountPercentage: Number,
    reviewCount: Number,
    stock: Number,
    badge: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Product", productSchema);
