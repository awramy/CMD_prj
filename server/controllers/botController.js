import { User } from '../models/schema.js';

class BotController {
  async sendMessage(msg, bot) {
    try {
      const chatId = msg.chat.id;
      const userId = msg.from.id;
      const username = msg.from.username || msg.from.first_name;

      console.log("Получено сообщение от пользователя:", { userId, username });

      let user = await User.findOne({ id: userId });

      if (!user) {
        user = new User({
          id: userId,
          name: username,
          role: "User", 
          balance: 3000, 
        });
        await user.save();
        console.log("Пользователь добавлен в базу данных:", user);
      } else {
        console.log("Пользователь уже существует:");
      }


      await bot.sendMessage(
        chatId,
        "Заходи в наш интернет магазин по кнопке ниже"
      );
    } catch (e) {
      console.error("Ошибка в sendMessage:", e);
    }
  }
}

export default new BotController();