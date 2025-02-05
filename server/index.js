import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import TelegramBot from 'node-telegram-bot-api';
import { botRouter } from './routes/botRouter.js';
import getRequests from './routes/getRequests.js'
import postRequests from './routes/postRequests.js';
import deleteRequests from './routes/deleteRequests.js'

const app = express();
const port = 3005;
const token = "7837860088:AAF3blEH-uG9UuWFoZibiFbadVbphb5Fsq8";
const bot = new TelegramBot(token, { polling: true });


app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/Bot')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));


app.use('/bot', botRouter(bot));


app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});

app.use('/', getRequests);
app.use('/', postRequests);
app.use('/', deleteRequests);

bot.on("polling_error", console.log);