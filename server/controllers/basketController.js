import { Basket } from "../models/schema.js";

class BasketController {
  async createOne(req, res) {
    try {
      const { product_id, print_image } = req.body
      const user_id = req.user?.user_id || '12345'

      await Basket.create({
        user_id,
        product_id,
        print_image,
      })
        .then(result => {return res.status(200).json(result)})
    } catch (e) {
      console.log(e.message)
      return res.status(500).json({error: e})
    }
  }
  async checkBasketItem(req, res) {
    try {
      const { product_id, print_image } = req.query
      const user_id = req.user?.user_id || '12345'

      console.log(user_id, product_id, print_image)

      const result = await Basket.findOne({
        user_id,
        product_id,
        print_image,
      })
      if (result) {
        return res.status(200).json(result)
      }
      return res.status(404).json({"message": false})
    } catch (e) {
      console.log(e)
      return res.status(500).json({error: e.message})
    }
  }
  async getAll(req, res) {
    try {
      const user_id = req.user?.user_id || '12345'

      await Basket.find({user_id})
        .then(result => {return res.status(200).json(result)})
    } catch (e) {
      return res.status(500).json({error: e})
    }
  }
  async deleteOne(req, res) {
    try {
      const user_id = req.user?.user_id || '12345'
      const { id: _id } = req.params
      console.log(req.params)

      await Basket.deleteOne({_id})
        .then(result => {return res.status(200).json(result)})
    } catch (e) {
      console.log(e)
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