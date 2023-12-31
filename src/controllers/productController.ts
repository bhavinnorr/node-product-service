// src/controllers/productController.ts
import express, { Request, Response } from 'express';
import Product from '../models/Product';

const router = express.Router();

// Route to get all products
router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;