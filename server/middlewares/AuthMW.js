import * as crypto from "node:crypto";

const botToken = process.env.TELEGRAM_BOT_TOKEN;

//мидлвейр для проверки сессии пользователя на валидность (обработка hash юзера)
export default function (req, res, next) {
  try {
    //получаем из заголовков запроса строку query_string (сформирована на клиенте)
    const params = new URLSearchParams(req.headers.query_string)
    //получаем строку хэш(токен), которую мы и будем проверять
    const hash = params.get('hash');
    //удаляем строку хэш из объекта с остальными данными
    params.delete('hash')

    console.log(req.headers.query_string)

    //сортируем данные так, как нужно телеграмму чтоб норм токен для сравнения сформировать
    const sortedData = Array.from(params.entries())
      .map(([key, value]) => `${key}=${value}`)
      .sort()
      .join('\n');

    console.log(sortedData)

    //формируем секретный ключ, основываясь на токене бота
    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest()
    //формируем хэш на основе секретного ключа и данных о юзере
    const hmac = crypto.createHmac('sha256', secretKey).update(sortedData).digest('hex')

    //сравниваем наш сформированный хэш с хэшем, полученным от клиента
    if(hmac === hash) {
      req.user = JSON.parse(params.get('user')).id
      next()
    } else {
      return res.status(401).json({message: 'unauthorized'})
    }

  } catch (error) {
    return res.status(401).json({message: error.message})
  }
}