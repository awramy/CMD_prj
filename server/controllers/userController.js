import {SelectPhoto, User} from '../models/schema.js';
import path from "path";
import getDirname from "../assets/getDirname.js";
import * as uuid from "uuid";

class UserController {
  async checkUser(req, res) {
    try {
      console.log(req.headers)
      return res.status(200).json({})
    } catch (error) {
      return res.status(400).json({})
    }
  }
  async getOrCreateUser(req, res) {
    try {
      //получаем данные о пользователе с клиента
      const { id, name, role } = req.headers
      if(!id) {//проверяем, пришли ли обязательные данные
        return res.status(400).json({message: 'User id not send'})
      }
      //ищем юзера в бд
      let user = await User.findOne( { id: id })
      if(user) {//если нашли - возвращаем юзера
        return res.status(200).json({user})
      }

      //если не нашли, создаем нового, сохраняем и возвращаем
      user = new User({
        id,
        name: name || 'New User',
        role: role || 'USER',
        balance: 0
      })
      await user.save();
      return res.status(200).json({user})
    } catch (error) {
      return res.status(500).send({ message: "Ошибка сервера", error });
    }
  }
  async savePhoto(req, res) {
    try {
      const { photo } = req.files
      const user = req.user || '12345'
      const fileName = uuid.v4() + '.jpg'

      console.log(fileName)

      photo.mv(path.resolve(getDirname(import.meta.url), '..', 'static/selectPhotos', fileName))

      const selectPhoto = new SelectPhoto({
        user_id: user,
        image: fileName
      })

      await selectPhoto.save();
      return res.status(200).json({data: fileName})
    } catch (error) {
      return res.status(403).send({ error: error });
    }
  }
}

export default new UserController();