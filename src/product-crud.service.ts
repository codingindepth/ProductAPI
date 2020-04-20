import { Product, products } from "./product";

export const getAllProducts = async (): Promise<Product[]> => {
    return products;
};

export const createProducts = async (product:Product): Promise<void> => { 
    products.push(product);  
}

export const updateProducts = async (product:Product): Promise<void> => { 
    let index = products.findIndex(d => d.id === product['id']);
    if(index >0 || index==0)
   {
    products[index]['productName'] = product['productName'];
    products[index]['productCode'] = product['productCode'];
    products[index]['prodRating'] = product['prodRating'];

   }
}


export const deleteProducts = async (id:number): Promise<void> => { 
    console.log(`in delete product index is ${JSON.stringify(id)}`)
    let index = products.findIndex(d => d.id === id);
    console.log(`in delete product index is ${index}`)
    if(index >0 || index==0)
    products.splice(index, 1);
    
}
