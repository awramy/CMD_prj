import express from "express";
import basketController from "../controllers/basketController.js";
import productController from "../controllers/productController.js"

const router = express.Router();


router.post("/createBasket", basketController.createBasket)
router.post("/products", productController.createProduct)

export default router;