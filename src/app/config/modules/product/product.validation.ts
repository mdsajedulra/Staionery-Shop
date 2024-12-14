import { z } from 'zod';

// Define the Zod schema
const ProductValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  brand: z.string().min(1, { message: 'Brand is required' }),
  price: z.number().min(0, { message: 'Price must be a positive number' }),
  category: z.enum([
    'Writing',
    'Office Supplies',
    'Art Supplies',
    'Educational',
    'Technology',
  ]),
  description: z.string().min(1, { message: 'Description is required' }),
  quantity: z
    .number()
    .min(0, { message: 'Quantity must be a positive number or zero' }),
  inStock: z.boolean(),
});

export default ProductValidationSchema;
