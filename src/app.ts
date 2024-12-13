import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRouter } from "./app/config/modules/product/product.route";
import { orderRouter } from "./app/config/modules/order/order.route";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
app.use("/api", orderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
