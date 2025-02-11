import { Product } from "../models/shema.js";
import path from "path";
import * as uuid from "uuid";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Получаем текущий путь файла
const __filename = fileURLToPath(import.meta.url);
// Получаем имя директории
const __dirname = dirname(__filename);

class ProductController {
  async createProduct(req, res) {
    try {
      const { name, price, description, pattern } = req.body
      const { image } = req.files
      const fileName = uuid.v4() + '.jpg'

      image.mv(path.resolve(__dirname, '..', 'static', fileName)) //dirname - путь к текущему файлу
      const product = new Product({
        name, price, image: fileName, description, pattern
      });

      await product.save();
      res.status(201).json({ message: "Продукт успешно создан", product });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
}

export default new ProductController();
