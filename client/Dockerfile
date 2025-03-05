# Используем более новый образ Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Собираем проект
RUN npm run build

# Указываем порт, который будет использовать приложение
EXPOSE 5173

# Команда для запуска сервера разработки
CMD ["npm", "run", "dev"]