import { Request, Response } from "express";
import { productService } from "./product.service";
import ProductValidationSchema from "./product.validation";


// craete product controller
const createProduct = async (req: Request, res: Response) =>{
    try {
        const {product} = req.body;
// data validation using zod

const zodparsedData = ProductValidationSchema.parse(product)
       const result= await productService.createProductIntoDB(zodparsedData);
       res.status(200).json({
        message: "Product created successfully",
        success: true,
        data: result
       })      
        
    } catch (error) {
        res.status(500).send(error)
    }
}
// Get All Stationery Products constroller
const getAllProducts = async(req:Request, res: Response) =>{
    try {
        const result = await productService.getAllProductFromDB();
        res.status(200).json({
            message: "Products retrieved successfully",
            success: true,
            data: result
           }) 
    } catch (error) {
        res.status(500).json({
            message: "something went rong"
        })
    }
    
}

//get a specific product

const getProductById = async(req: Request, res: Response) =>{
    const {productId} = req.params;
     const result = await productService.getSpacificProductFromDB(productId);
     try {
        res.status(200).json({
            message: "Product retrieved successfully",
            success: true,
            data: result
           })  
     } catch (error) {
        res.status(500).send(error)
     }
}


export const ProductControllers = {
    createProduct,
    getAllProducts,
    getProductById
}