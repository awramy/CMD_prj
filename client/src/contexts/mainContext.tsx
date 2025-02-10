// contexts/MainContext.tsx
import React, { createContext, ReactNode } from 'react';
import userStore from '../store/userStore.ts';
import basketStore from "../store/basketStore.ts"; // Убедитесь, что путь правильный
import productsStore from "../store/productsStore.ts"; // Убедитесь, что путь правильный


interface MainContextType {
  user: userStore;
  basket: basketStore;
  products: productsStore;
}

export const MainContext = createContext<MainContextType>({
  user: {} as userStore, // Временное значение, заменяется в провайдере
  basket: {} as basketStore,
  products: {} as productsStore,
});

interface MainProviderProps {
  children: ReactNode;
}

export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const user = new userStore();
  const basket = new basketStore();
  const products = new productsStore();

  return (
    <MainContext.Provider value={{ user, basket, products }}>
      {children}
    </MainContext.Provider>
  );
};