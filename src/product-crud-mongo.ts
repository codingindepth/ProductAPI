import { Product } from './product';
import products from './product-schema';

export const getProductList = async (req:any, res:any) => {
    products.find((err: any, result: any) => {
        if (err) {
          res.send("Error!");
        } else {
        console.log(JSON.stringify(result))
          res.send(result);
        }
      });
  };

  export const createProduct = async (req:any, res:any) => {
    const request: Product = req.body;
    console.log(JSON.stringify(request))
    let prod = new products(request);
    prod.save((err:any, result:any) => {
        if (err) {
            res.send("Error!");
          } else {
          console.log(JSON.stringify(result))
            res.send(result);
          }
    });
  };

export const updateroduct = async (req:any, res:any) => {
    const product: Product = req.body;
    //Update
  };

  export const deleteproduct = async (req:any, res:any) => {
    const productID: number = req.body['id'];
    //delete
  };