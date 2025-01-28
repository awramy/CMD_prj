import schema from "../models/shema.js"; 

class UserController {
  async createUser(req, res) {
    try {
      const user = new schema.User({
        id: req.body.id,
        name: req.body.name,
        basket: req.body.basket || [],
      });
      await user.save();
      res.status(201).send({ message: "Пользователь создан", user });
    } catch (error) {
      console.error("Ошибка при создании пользователя:", error);
      res.status(500).send({ message: "Ошибка сервера", error });
    }
  }
}

export default new UserController();
