import {$authHost} from './index.ts'
import {TypeBasketItem} from "../../types/types.ts";

//создаем POST запрос на создание продукта в корзине
export const createBasketItem = async (product_id: string, print_image: string): Promise<TypeBasketItem> => {
  const { data } = await $authHost.post<TypeBasketItem>('/basket', {
    product_id,
    print_image,
  })
  return data
}

export const checkBasketItem = async (product_id: string, print_image: string): Promise<TypeBasketItem> => {
  const { data } = await $authHost.get<TypeBasketItem>('/basket/check', {
    params: { product_id, print_image },
  })

  return data
}

export const deleteBasketItem = async (id: string): Promise<TypeBasketItem> => {
  const { data } = await $authHost.delete<TypeBasketItem>(`/basket/${id}`)
  return data
}

export const fetchBasket = async (): Promise<TypeBasketItem[]> => {
  const { data } = await $authHost.get<TypeBasketItem[]>(`/basket`)
  return data
}