import { Product } from "../models/shema.js";
import fs from "fs";
import path from "path";

class ProductController {
  async createProduct(req, res) {
    const userId = userService.getUserId();
    const profilePhotos = await bot.getUserProfilePhotos(userId);

    let photoUrl = null;

    if (profilePhotos.total_count > 0 && profilePhotos.photos?.[0]?.[0]) {
      const fileID = profilePhotos.photos[0][0].file_id;
      const fileInfo = await bot.getFile(fileID);
      const downloadedFile = await bot.downloadFile(
        fileInfo.file_id,
        "./public"
      );

      console.log("Фотография скачана:", downloadedFile);
      photoUrl = `/public/${downloadedFile}`;
    } else if (req.file) {
      const uploadedFile = req.file;
      const filePath = path.join("./public", uploadedFile.filename);
      fs.renameSync(uploadedFile.path, filePath);
      photoUrl = `/public/${uploadedFile.filename}`;
    } else {
      return res
        .status(400)
        .json({ message: "Фото не найдено и не загружено" });
    }

    const product = new Product({
      image: photoUrl,
      name: req.body.name, 
      price: req.body.price, 
      description: req.body.description, 
      pattern: req.body.pattern,
    });

    await product.save();

    res.status(201).json({ message: "Продукт успешно создан", product });
  }
}

export default new ProductController();
