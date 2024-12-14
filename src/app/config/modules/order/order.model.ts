import mongoose, { CallbackError, Schema } from 'mongoose';
import { IOrder } from './order.interfact';
import { ProductModel } from '../product/product.model';

const OrderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  },
);

OrderSchema.pre('save', async function (next) {
  // console.log(this);
  try {
    const product = await ProductModel.findById(this.product);

    if (!product) {
      const error = new Error('Product not found');
      error.name = 'NotFoundError';
      return next(error);
    }

    if (product.inStock && product.quantity >= this.quantity) {
      product.quantity -= this.quantity;

      if (product.quantity === 0) {
        product.inStock = false;
      }

      await product.save();
      return next(); // Proceed to the next middleware
    } else {
      const error = new Error('Insufficient stock or product is out of stock');
      error.name = 'StockError';
      return next(error);
    }
  } catch (err: unknown) {
    // Ensure the error is logged for debugging
    // console.error('Error updating product stock:', err);

    // Pass the error to the next middleware
    next(err as CallbackError);
  }

  // try {
  //   const product = await ProductModel.findById(this.product);
  //   // console.log(product);
  //   if (product?.inStock === true && product.quantity >= this.quantity) {
  //     product.quantity -= this.quantity;
  //     if (product.quantity === 0) {
  //       product.inStock = false;
  //     }
  //     await product.save();
  //     next();
  //   }
  // } catch (err: any) {
  //   // console.log(err);
  //   next(err);
  // }
});

export const OrderModel = mongoose.model('Order', OrderSchema);
