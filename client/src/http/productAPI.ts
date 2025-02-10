import { $host } from './index.ts'

//получение списка всех device
export const fetchProducts = async () => {
  const { data } = await $host.get('/products')
  return data
}