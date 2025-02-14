import botController from '../controllers/botController.js';

const botRouter = bot => {
  bot.on('message', (msg) => {
    botController.sendMessage(msg, bot)
  })

}

export default botRouter