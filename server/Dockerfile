FROM node:22-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

#копируем package
COPY package.json .

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]