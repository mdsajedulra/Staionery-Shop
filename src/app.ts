import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/config/modules/product/product.route';
import { orderRouter } from './app/config/modules/order/order.route';

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api', productRouter);
app.use('/api', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .json({ sucess: true, message: 'Welcome to the Stationary Shop API' });
});

// unknown route error handle
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({ sucess: false, message: 'Route not found' });
});

export default app;
