import { Product } from "../models/schema.js";
import path from "path";
import * as uuid from "uuid";
import getDirname from "../assets/getDirname.js";


class ProductController {
  async createProduct(req, res) {
    try {
      const { name, price, description, pattern, info } = req.body
      const { image } = req.files
      const fileName = uuid.v4() + '.jpg'

      image.mv(path.resolve(getDirname(import.meta.url), '..', 'static/productPhotos', fileName)) //dirname - путь к текущему файлу

      const product = new Product({
        name, price: Number(price), image: fileName, description, pattern: JSON.parse(pattern), info: JSON.parse(info),
      });

      await product.save();
      res.status(201).json({ message: "Продукт успешно создан", product });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
  async getAll (req, res) {
    try {
      const { gender } = req.query
      let products = '';

      if (gender === 'Мужской' || gender === 'Женский') {
        products = await Product.find({
          info: { $elemMatch: { description: gender } },
        })
      } else {
        products = await Product.find({})
      }

      return res.status(200).json(products)
    } catch (e) {
      console.log(e)
      return res.status(400).json({ error: e.message });
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

  async testCreateProduct(req, res) {
    try {
      const { name, price, image, description, pattern, info } = req.body

      const product = new Product({
        name, price: Number(price), image, description, pattern: JSON.parse(pattern), info: JSON.parse(info),
      });

      await product.save();
      res.status(201).json({ message: "Продукт успешно создан", product });
    } catch (e) {
      console.log(e)
      return res.status(400).json({ error: e.message });
    }
  }
}

export default new ProductController();
