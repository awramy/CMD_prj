import axios from "axios";
import { InternalAxiosRequestConfig } from "axios";

//инстансы (создаем экземпяляры axios для запросов)

const $host = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL
})

const $authHost = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL
})

//функция-перехватчик, добавяет в header инфо о юзере к каждому запросу
const authInterceptor = ( config: InternalAxiosRequestConfig ) => {

  const { query_id, user, hash } = window.Telegram.WebApp.initDataUnsafe

  config.headers.set({
    user: user?.id || " ",
    query_id: query_id || " ",
    hash: hash || " ",
  })

  return config;
}

//добавляем интерцептор для запроса
$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}