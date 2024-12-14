import { Request, Response } from 'express';
import { orderService } from './order.service';
import { OrderSchemaValidation } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const zodParseData = OrderSchemaValidation.parse(payload);
    const result = await orderService.createOrderInDB(zodParseData);

    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    // res.status(500).send(error);
    console.log(error);
  }
};

// calculate revenue

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.calculateRevenue();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    // res.status(500).send(error);
    console.log(error);
  }
};

export const orderController = {
  createOrder,
  calculateRevenue,
};
