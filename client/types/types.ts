//тип продукта (используем в сторе и компонентах)
export type TypeProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  pattern: {
    top?: string,
    left?: string,
    width?: string,
    opacity?: string,
    transform?: string,
  };
}

//тип элемента корзины
export type TypeBasketItem = {
  id: number;
  product_id: number;
  printImage: string;
}

export type TypeBasketList = TypeBasketItem[];
//тип инорформации о пользователе
export type TypeUserInfo = {
  id?: number;
  name?: string;
  balance?: number;
}
//тип списка всех фоток юзера
export type TypeUserPhotos = {
  id: number;
  path: string;
}[];
//тип выбранного юзером фото
export type TypeActivePhoto = {
  id?: number;
  path?: string;
};