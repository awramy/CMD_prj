import { Product } from "../models/schema.js";
import path from "path";
import * as uuid from "uuid";
import getDirname from "../assets/getDirname.js";


class ProductController {
  async createProduct(req, res) {
    try {
      const { name, price, description, pattern } = req.body
      const { image } = req.files
      const fileName = uuid.v4() + '.jpg'

      image.mv(path.resolve(getDirname(import.meta.url), '..', 'static/selectPhotos', fileName)) //dirname - путь к текущему файлу

      const product = new Product({
        name, price, image: fileName, description, pattern
      });

      await product.save();
      res.status(201).json({ message: "Продукт успешно создан", product });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
  async getAll (req, res) {
    try {
      const products = Product.find({})
      return res.status(200).json(products)
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
  async getOne(req, res) {
    try{
      const { id } = req.params;
      const product = await Product.findById(id)
      return res.status(200).json({product});
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
  async deleteOne (req, res) {
    try {
      const { id } = req.params;
      const result = Product.findByIdAndDelete(id)
      return res.status(200).json(result);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
}

export default new ProductController();
