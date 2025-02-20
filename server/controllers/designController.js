import { Design } from "../models/schema.js";
import path from "path";
import * as uuid from "uuid";
import getDirname from "../assets/getDirname.js";


class DesignController {
  async createDesign(req, res) {
    try {
      const { image } = req.files
      const fileName = uuid.v4() + '.jpg'

      image.mv(path.resolve(getDirname(import.meta.url), '..', 'static/publicPhotos', fileName)) 

      const design = new Design({
        image: fileName, 
      });

      await design.save();
      res.status(201).json({ message: "Новый дизайн успешно создан", design });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
  async getDesign (req, res) {
    try {
      const design = await Design.find({})
      return res.status(200).json(design)
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }
}

export default new DesignController();
