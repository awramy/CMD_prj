import axios from "axios";

//инстансы

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

// const $authHost = axios.create({
//   baseURL: process.env.REACT_APP_API_URL
// })

//функция для авто добавления токеена к каждому запросу
// const authInterceptor = config => {
//   config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
//   return config
// }
//добавляем интерцептор для запроса
// $authHost.interceptors.request.use(authInterceptor)

export {
  $host,
}