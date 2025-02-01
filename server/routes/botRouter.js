import express from 'express';
import botController from "../controllers/botController.js";
import userController from '../controllers/userController.js';


const botRouter = (bot) => {
  const router = express.Router()

  router.post("/createUser", userController.createUser);

  bot.onText(/\/start/, (msg) => {
    console.log("Получена команда /start");
    botController.sendMessage(msg, bot);
  });

  return router;
};

export { botRouter };