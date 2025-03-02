import {$authHost} from './index.ts'
import {TypeProduct} from "../../types/types.ts";

//получение списка всех device
export const fetchProducts = async (gender?: string): Promise<TypeProduct[]> => {
  const { data } = await $authHost.get<TypeProduct[]>('/products', {
    params: {
      gender,
    }
  })
  return data
}