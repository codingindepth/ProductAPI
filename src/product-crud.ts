import * as ProductService from './product-crud.service';
import { Product } from './product';

export const getProductList = async (req:any, res:any) => {
    const productList: Product[] = await ProductService.getAllProducts();
    console.log(`in get ${JSON.stringify(productList)}`)
    try {
        res.status(200).send(productList);
      } catch (e) {
        res.status(404).send(e.message);
      }
  };
