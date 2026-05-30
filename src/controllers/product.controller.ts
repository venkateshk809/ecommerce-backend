import { Request, Response } from "express";
import Product from "../models/product.model";

const getProducts = async (_req: Request, res: Response) => {
  const products = await Product.find();

  res.json(products);
};

export default getProducts;
