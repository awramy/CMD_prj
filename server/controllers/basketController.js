import { Basket } from "../models/schema.js";

class BasketController {
  async createOne(req, res) {
    try {
      const { product_id, print_image } = req.body
      const { user_id } = req.user;

      await Basket.create({
        user_id,
        product_id,
        print_image,
      })
        .then(result => {return res.status(200).json({result})})
    } catch (e) {
      return res.status(500).json({error: e})
    }
  }
  async getAll(req, res) {
    try {
      const { user_id } = req.user

      await Basket.find({user_id: user_id})
        .then(result => {return res.status(200).json({result})})
    } catch (e) {
      return res.status(500).json({error: e})
    }
  }
  async deleteOne(req, res) {
    try {
      const { user_id } = req.user
      const { id: basket_id } = req.params

      await Basket.deleteOne({user_id: user_id, basket_id: basket_id})
        .then(result => {return res.status(200).json({result})})
    } catch (e) {
      return res.status(500).json({error: e})
    }
  }
  async deleteAll(req, res) {
    try {
      const { user_id } = req.user

      await Basket.deleteMany({user_id: user_id})
        .then(result => {return res.status(200).json({result})})
    } catch (e) {
      return res.status(500).json({error: e})
    }
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