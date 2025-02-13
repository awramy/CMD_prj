import { User } from '../models/schema.js';

class UserController {
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
}

export default new UserController();