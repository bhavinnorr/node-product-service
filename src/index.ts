import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import productController from "./controllers/productController";

dotenv.config();

const app: Application = express();
const port: String = process.env.PORT || "3000";
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", async (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Node Product Service",
  });
});

app.use("/products", productController);

app.listen(port, () => {
  console.log(`Product API started at http://127.0.0.1:${port}`);
});
