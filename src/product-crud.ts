export const getProductList = async (req:any, res:any) => {
    const products:any =   {
        id:21,
        productNAme:"Netflix"
    }
    try {
      
        res.status(200).send(products);
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

}