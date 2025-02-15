import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import TelegramBot from 'node-telegram-bot-api';
import botRouter from './routes/botRouter.js';
import mainRouter from './routes/mainRouter.js';
import fileUpload from 'express-fileupload'
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Получаем текущий путь файла
const __filename = fileURLToPath(import.meta.url);
// Получаем имя директории
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3005;
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

app.use(express.json());
app.use(cors());
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, 'static')))

mongoose.connect('mongodb://127.0.0.1:27017/Bot')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

//роуты (на бота и mainRouter на приложение)
botRouter(bot)
app.use('/', mainRouter);

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});