import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import TelegramBot from 'node-telegram-bot-api';
import botRouter from "./routes/botRouter.js";

let app = express();
let port = 3005;
let token = "7837860088:AAF3blEH-uG9UuWFoZibiFbadVbphb5Fsq8";
let bot = new TelegramBot(token, { polling: true });

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Bot");
app.use(express.static("public"));

app.use('/api', botRouter(app));
botRouter(bot);

app.listen(port, function () {
  console.log('Сервер запущен: http://localhost:${port}');
});
