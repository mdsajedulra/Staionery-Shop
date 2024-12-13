import { IOrder } from "./order.interfact";
import { OrderModel } from "./order.model";

const createOrderInDB = async (payload: IOrder) => {
  const result = await OrderModel.create(payload);
  return result;
};
const calculateRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: "$totalPrice",
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  return result;
};

export const orderService = {
  createOrderInDB,
  calculateRevenue,
};
