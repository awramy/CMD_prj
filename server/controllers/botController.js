import schedule from 'node-schedule';
import greetings from '../models/message.json'; 

class BotController {
  constructor(bot) {
    this.schedule = schedule;
    this.bot = bot; 
    this.initScheduledMessages(); 
  }
  
  initScheduledMessages() {
    greetings.forEach((greeting) => {
      const [month, dayTime] = greeting.date.split('-');
      const [day, time] = dayTime.split('T'); 
      const [hour, minute, second] = time.split(':'); 
      const cronExpression = `${second} ${minute} ${hour} ${day} ${month} *`;
      this.schedule.scheduleJob(cronExpression, async () => {
        try {
          await this.bot.sendMessage(greeting.chatId || 'DEFAULT_CHAT_ID', greeting.message);
        } catch (e) {
          console.error("Ошибка при отправке запланированного сообщения:", e);
        }
      });
    });
  }

  async sendMessage(msg) {
    try {
      const chatId = msg.chat.id;
      const userId = msg.from.id;
      const text = msg.text;
      const username = msg.from.username || msg.from.first_name;

      console.log("Получено сообщение от пользователя:", { userId, username });

      if (text === '/start') {
        await this.bot.sendMessage(chatId, {
          reply_markup: {
            keyboard: [
              [{ text: 'Каталог товаров', web_app: { url: process.env.WEB_APP_URL + '/' } }]
            ]
          }
        });
        await this.bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Моя корзина', web_app: { url: process.env.WEB_APP_URL } }]
            ]
          }
        });
      }
    } catch (e) {
      console.error("Ошибка в sendMessage:", e);
    }
  }
}

export default BotController;