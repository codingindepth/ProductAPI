import { Product, products } from "./product";
import mongoose from 'mongoose';

export const getAllProducts = async (): Promise<Product[]> => {
    return products;
  };

export const createProducts = async (req:any): Promise<void> => {
    
const data = req.body;
  const request = {
    id: new mongoose.mongo.ObjectId(),
    productName: data.productName,
    productCode: data.productCode,
    proddescription: data.proddescription,
    prodRating: data.prodRating,

  }


}