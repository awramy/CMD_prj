import { Basket } from "../models/schema.js";

class BasketController {
  async createBasket(req, res) {
    const { product_id, print_image} = req.body
    const { userId } = req.user;
  }
}

export default new BasketController();


// {
//   const baskets = await Basket.find({ user_id: userId });
//
//
//   const newId = baskets.length === 0 ? 0 : baskets.length;
//
//   const basket = new Basket({
//     id: newId,
//     user_id: userId,
//     product_id: req.body.productId,
//     printImage: req.body.printImage,
//   });
//
//   await basket.save();
// }