import { Request, Response } from "express";
import { productService } from "./product.service";
import ProductValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) =>{
    try {
        const {product} = req.body;

// data validation using zod

const zodparsedData = ProductValidationSchema.parse(product)



       const result= await productService.createProductIntoDB(zodparsedData);
       res.send(result)
        
    } catch (error) {
        res.send(error)
    }
}

export const ProductControllers = {
    createProduct,
}