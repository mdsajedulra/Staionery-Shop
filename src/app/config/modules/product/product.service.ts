import StationeryProductType from "./product.interface";
import { ProductModel } from "./product.model";

//create product on database
const createProductIntoDB = async (product: StationeryProductType) => {
  const result = await ProductModel.create(product);
  return result;
};

// retrive all data from database
const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
// retrive specific data by id
const getSpacificProductFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};
// update a product by id in db
const UpdateProductInDB = async (productId: string, updateDetails: object) => {
  // console.log(productId, updateDetails);
  const result = await ProductModel.findByIdAndUpdate(
    productId,
    updateDetails,
    {
      new: true,
    }
  );
  return result;
};
export const productService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSpacificProductFromDB,
  UpdateProductInDB,
};
