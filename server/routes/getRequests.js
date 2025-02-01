import express from "express";
import { User, Basket, Product } from "../models/shema.js";
import userService from '../models/userId.js';

const router = express.Router();
const userId = userService.getUserId();

router.get("/user", async function (req, res) {
  const user = await User.findOne({ id: userId });
  res.send(user)
});

router.get("/basket", async function (req, res) {
  const basket = await Basket.find({ user_id: userId });
  res.send(basket);
});

router.get("/product/:id", async function (req, res) {
  const productId = req.params.id;
  const product = await Product.findOne({ id: productId });
  res.send(product);
});

router.get("/products", async function (req, res) {
  const products = await Product.find();
  res.send(products);
});

export default router;
