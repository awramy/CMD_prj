import { Basket } from "../models/shema.js";
import userService from '../models/userId.js';

class BasketController {
  async createBasket(req, res) {
    const baskets = await Basket.find({ user_id: userId });

    const userId = userService.getUserId();

    const newId = baskets.length === 0 ? 0 : baskets.length;

    const basket = new Basket({
      id: newId,
      user_id: userId,
      product_id: req.body.productId,
      printImage: req.body.printImage,
    });

    await basket.save();
  }
}

export default new BasketController();