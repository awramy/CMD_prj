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

  const { user } = window.Telegram.WebApp.initDataUnsafe

  config.headers.set({
    id: user?.id || "",
    // first_name: user?.first_name || "",
    username: user?.username || "",
    // auth_date: String(auth_date) || "",
    // hash: hash || "",
  })

  return config;
}

//добавляем интерцептор для запроса
$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}