import { Request, Response } from 'express';
import { productService } from './product.service';
import ProductValidationSchema from './product.validation';

// craete product controller
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    // console.log(req.body);
    // data validation using zod

    const zodparsedData = ProductValidationSchema.parse(product);

    const result = await productService.createProductIntoDB(zodparsedData);
    res.status(200).json({
      message: 'Product created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};
// Get All Stationery Products constroller
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductFromDB();
    res.status(200).json({
      message: 'Products retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'something went rong',
    });
  }
};

//get a specific product

const getProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await productService.getSpacificProductFromDB(productId);

    res.status(200).json({
      message: 'Products retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    if (err.name === 'CastError') {
      const message = `Product not found. Invalid ID`;
      res.status(404).send(message);
    }
    res.status(500).send(err);
  }
};

//update a  product

const updateProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const updateDetails = req.body;
  // console.log(productId);
  const result = await productService.UpdateProductInDB(
    productId,
    updateDetails,
  );
  try {
    res.status(200).json({
      message: 'Product update successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete product by id from db

const deleteProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;

  // console.log(productId);
  const result = await productService.deleteProductFromDB(productId);
  try {
    res.status(200).json({
      message: 'Product deleted successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
