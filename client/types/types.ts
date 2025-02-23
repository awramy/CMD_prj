//тип продукта (используем в сторе и компонентах)
import React from "react";

export type TypeProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  pattern: {
    top?: string,
    left?: string,
    width?: string,
    opacity?: string,
    transform?: string,
  };
  info: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[]
}

export type TypeShowModal = {showModal: boolean, setShowModal: React.Dispatch<React.SetStateAction<boolean>>}

//тип элемента корзины
export type TypeBasketItem = {
  id: string;
  product_id: string;
  printImage: string;
}

export type TypeBasketList = TypeBasketItem[];
//тип информации о пользователе
export type TypeUserInfo = {
  id?: number;
  name?: string;
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

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: {
          query_id?: string;
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
          };
          auth_date?: number;
          hash?: string;
        };
        close: () => void;
        expand: () => void;
        isExpanded: boolean;
        onEvent: (eventType: string, callback: () => void) => void;
        offEvent: (eventType: string, callback: () => void) => void;
        sendData: (data: string) => void;
      };
    };
  }
}