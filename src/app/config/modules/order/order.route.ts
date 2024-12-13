import express from "express";
import { orderController } from "./order.controllers";

const router = express.Router();

router.post("/orders", orderController.createOrder);
router.post("/orders/revenue", orderController.calculateRevenue);

export const orderRouter = router;
