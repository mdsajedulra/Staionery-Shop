import express from 'express';
import { ProductControllers } from './product.controller';


const router = express.Router();

router.post('/create-products', ProductControllers.createProduct)
router.get('/create-products', ProductControllers.getAllProducts)
router.get('/products/:productId', ProductControllers.getProductById)

export const productRouter = router