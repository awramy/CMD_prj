import React, {createContext, ReactNode} from 'react';
import userStore from '../store/userStore.ts';
import basketStore from "../store/basketStore.ts"; // Убедитесь, чо путь правильный
import productsStore from "../store/productsStore.ts";
import {ModalProvider} from "./modalContext.tsx";

interface MainContextType {
  user: userStore;
  basket: basketStore;
  products: productsStore;
}
interface MainProviderProps {
  children: ReactNode;
}


export const MainContext = createContext<MainContextType>({
  user: {} as userStore, // Временное значение, заменяется в провайдере
  basket: {} as basketStore,
  products: {} as productsStore,
});

export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const user = new userStore();
  console.log('ahahahhahahahah');
  const basket = new basketStore();
  const products = new productsStore();

  return (
    <MainContext.Provider value={{ user, basket, products}}>
      <ModalProvider>
        {children}
      </ModalProvider>
    </MainContext.Provider>
  );
};