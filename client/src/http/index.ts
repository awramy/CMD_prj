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

  config.headers.set({
    user: localStorage.getItem('user'),
    query_id: localStorage.getItem('query_id'),
    hash: localStorage.getItem('hash'),
    url: localStorage.getItem('url')
  })

  return config;
}

//добавляем интерцептор для запроса
$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}