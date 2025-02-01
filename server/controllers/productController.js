import { Product } from "../models/shema.js";

class ProductController {
  async createProduct(req, res) {
    const product = new Product({

    });

    await product.save();
  }
}

export default new ProductController();