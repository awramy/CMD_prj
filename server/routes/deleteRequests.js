import express from "express";
import { Basket, Product } from "../models/shema.js";
import userService from '../models/userId.js';

const router = express.Router();
const userId = userService.getUserId();

router.delete("/delproduct/:id", async function (req, res) {
  const id = req.params.id;
  await Product.deleteOne({ _id: id });
});
router.delete("/delbasket/:id", async function (req, res) {
  const id = req.params.id;
  await Basket.deleteOne({ _id: id });
});
router.delete("/delbasket", async function (req, res) {
  await Basket.delete({ user_id : userId });
});

export default router;
