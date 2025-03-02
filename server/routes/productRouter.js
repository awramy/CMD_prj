import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();


router.get('/products', productController.getAll)
router.get('/products/:id', productController.getOne)

router.post('/products', productController.createProduct)
router.post('/testProducts', productController.testCreateProduct)

router.delete('/products/:id', productController.deleteOne)

export default router