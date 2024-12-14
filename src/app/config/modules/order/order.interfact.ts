import { Model } from 'mongoose';

export interface IOrder {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
}

export interface OrderModel extends Model<IOrder> {
  isAvailable: (id: string, payload: number) => Promise<boolean>;
  isExists: (id: string) => Promise<boolean>;
}
