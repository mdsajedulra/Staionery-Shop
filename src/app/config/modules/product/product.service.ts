import StationeryProductType from "./product.interface";
import { ProductModel } from "./product.model";

//create product on database
const createProductIntoDB = async(product: StationeryProductType)=>{
    const result = await ProductModel.create(product)
    return result;
}

// retrive all data from database
const getAllProductFromDB = async() =>{
    const result = await ProductModel.find()
    return result;
}
export const productService = {
    createProductIntoDB,
    getAllProductFromDB
}