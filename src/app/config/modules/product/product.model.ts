import { model, Schema } from "mongoose";
import StationeryProductType from "./product.interface";




// staioner product schema
const StationeryProductTypeSchema = new Schema<StationeryProductType>({
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
    
  },{ timestamps: true });

  export const ProductModel = model<StationeryProductType>('product', StationeryProductTypeSchema);

  