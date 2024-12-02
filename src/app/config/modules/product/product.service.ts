import StationeryProduct from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async(product: StationeryProduct)=>{
    const result = await ProductModel.create(product)
    return result;
}
export const productService = {
    createProductIntoDB
}