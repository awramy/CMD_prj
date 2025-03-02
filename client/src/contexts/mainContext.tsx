import React, {createContext, ReactNode} from 'react';
import userStore from '../store/userStore.ts';
import productsStore from "../store/productsStore.ts";
import {ModalProvider} from "./modalContext.tsx";
import {BasketProvider} from "./basketContext.tsx";

interface MainContextType {
  user: userStore;
  products: productsStore;
}
interface MainProviderProps {
  children: ReactNode;
}


export const MainContext = createContext<MainContextType>({
  user: {} as userStore, // Временное значение, заменяется в провайдере
  products: {} as productsStore,
});

export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const user = new userStore();
  const products = new productsStore();

  return (
    <MainContext.Provider value={{ user, products}}>
      <ModalProvider>
        <BasketProvider>
          {children}
        </BasketProvider>
      </ModalProvider>
    </MainContext.Provider>
  );
};