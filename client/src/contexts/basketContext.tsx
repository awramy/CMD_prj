import {TypeBasketContext, TypeBasketList} from "../../types/types.ts";
import React, {createContext, ReactNode, useState} from "react";

export const BasketContext = createContext<TypeBasketContext>({
  basket: [],//временные значения
  setBasket: (() => {})
  }
);

export const BasketProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [basket, setBasket] = useState<TypeBasketList>([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};