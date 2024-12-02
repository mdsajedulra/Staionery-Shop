import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) =>{
    try {
        const {product} = req.body;
       const result= await productService.createProductIntoDB(product);
       res.send(result)
        
    } catch (error) {
        res.send(error)
    }
}

export const ProductControllers = {
    createProduct,
}