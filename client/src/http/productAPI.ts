import { $host } from './index.ts'
import {TypeProduct} from "../../types/types.ts";

//получение списка всех device
export const fetchProducts = async (): Promise<TypeProduct[]> => {
  const { data } = await $host.get<TypeProduct[]>('/products')
  return data
}