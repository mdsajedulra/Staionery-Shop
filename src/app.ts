import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { productRouter } from './app/config/modules/product/product.route';

const app:Application = express()
app.use(express.json());
app.use(cors());

app.use('/api/v1/stationaryshop', productRouter)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})



export default app;