import { Design } from "../models/schema.js";
import path from "path";
import * as uuid from "uuid";
import getDirname from "../assets/getDirname.js";

class DesignController {
  async createDesign(req, res) {
    try {
      const {author} = req.body;
      const { image } = req.files;
      const fileName = uuid.v4() + ".jpg";

      image.mv(
        path.resolve(
          getDirname(import.meta.url),
          "..",
          "static/publicPhotos",
          fileName
        )
      );

      const design = new Design({
        image: fileName,
        user_id: author,
        author,
        like: 0,
        dislike: 0,
        user_like: [],
        user_dislike: [],
      });

      await design.save();
      res.status(201).json({ message: "Новый дизайн успешно создан", design });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
  async getDesign(req, res) {
    try {
      const design = await Design.find({});
      return res.status(200).json(design);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }
  async like(req, res) {
    try {
      const { id, user_id } = req.body;
  
      const design = await Design.findOne({ _id: id });
      if (!design) {
        return res.status(404).json({ message: "Дизайн не найден" });
      }
  
      if (design.user_like.includes(user_id)) {
        design.user_like = design.user_like.filter((id) => id !== user_id);
      } else {
        design.user_like.push(user_id);
      }

      design.like = design.user_like.length;

      await design.save();
      res.status(200).json({ message: "Лайк обновлен", design });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Ошибка сервера", error: e.message });
    }
  }
  async dislike(req, res) {
    try {
      const { id, user_id } = req.body;
  
      const design = await Design.findOne({ _id: id });
      if (!design) {
        return res.status(404).json({ message: "Дизайн не найден" });
      }
  
      if (design.user_dislike.includes(user_id)) {
        design.user_dislike = design.user_dislike.filter((id) => id !== user_id);
      } else {
        design.user_dislike.push(user_id);
      }

      design.dislike = design.user_dislike.length;

      await design.save();
      res.status(200).json({ message: "Лайк обновлен", design });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Ошибка сервера", error: e.message });
    }
  }
}

export default new DesignController();
