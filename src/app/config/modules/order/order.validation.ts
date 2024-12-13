import { z } from "zod";

export const OrderSchemaValidation = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  product: z.string().min(1, { message: "Product name cannot be empty" }),
  quantity: z.number().int().min(1, { message: "Quantity must be at least 1" }),
  totalPrice: z.number().min(0, { message: "Total price cannot be negative" }),
});
