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
    res.status(500).send(error);
  }
};

//get a specific product

const getProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await productService.getSpacificProductFromDB(productId);

    res.status(200).json({
      message: 'Product retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    // Narrowing down the type of 'error'
    if (error instanceof Error) {
      if (error.name === 'CastError') {
        res.status(404).json({
          message: 'Product not found. Invalid ID',
          success: false,
        });
      }

      res.status(500).json({
        message: 'An unexpected error occurred',
        success: false,
        error: error.message,
      });
    } else {
      // Handle unexpected non-error types (optional)
      res.status(500).json({
        message: 'An unexpected error occurred',
        success: false,
      });
    }
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
