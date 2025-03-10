import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import TelegramBot from 'node-telegram-bot-api';
import botRouter from './routes/botRouter.js';
import mainRouter from './routes/mainRouter.js';
import fileUpload from 'express-fileupload'
import path from "path";
import getDirname from "./assets/getDirname.js";

const app = express();
const port = process.env.PORT || 3005;
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const mongoUrl = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());
app.use(fileUpload({}))
app.use(express.static(path.resolve(getDirname(import.meta.url), 'static')))


mongoose.connect(mongoUrl)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

botRouter(bot)
app.use('/', mainRouter);

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});
