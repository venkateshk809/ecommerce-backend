import { Request, Response } from "express";
import Product from "../models/product.model";

export const getProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;

    const skip = (page - 1) * limit;

    const totalProducts = await Product.countDocuments();

    const products = await Product.find().skip(skip).limit(limit);

    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      products,
      page,
      limit,
      totalProducts,
      totalPages,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
};
