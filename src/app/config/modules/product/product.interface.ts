type StationeryProductType = {
  name: string;
  brand: string;
  price: number;
  category:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology'; // The type of product, using an enum
  description: string;
  quantity: number;
  inStock: boolean;
};

export default StationeryProductType;
