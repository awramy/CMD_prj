// import { User } from '../models/schema.js';

class BotController {
  async sendMessage(msg, bot) {
    try {
      const chatId = msg.chat.id;
      const userId = msg.from.id;
      const text = msg.text;
      const username = msg.from.username || msg.from.first_name;

      console.log("Получено сообщение от пользователя:", { userId, username });

      if (text === '/start') {
        await bot.sendMessage(chatId, 'Button is Bottom', {//вторым агрументом в ответ - набор опций
          reply_markup: {//название обьекта опций
            keyboard: [//keyboard - кнопка
              [{text: 'Каталог товаров', web_app: {url: process.env.WEB_APP_URL + '/'}}]
            ]
          }
        })
        await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
          reply_markup: {
            inline_keyboard: [
              [{text: 'Моя корзина', web_app: {url: process.env.WEB_APP_URL}}]
            ]
          }
        })
      }
    } catch (e) {
      console.error("Ошибка в sendMessage:", e);
    }
  }
}

export default new BotController();