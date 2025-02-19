// contexts/MainContext.tsx
import React, {createContext, ReactNode, useState} from 'react';
import userStore from '../store/userStore.ts';
import basketStore from "../store/basketStore.ts"; // Убедитесь, что путь правильный
import productsStore from "../store/productsStore.ts";
import stateStore from "../store/stateStore.ts";
import {TypeShowModal} from "../../types/types.ts"; // Убедитесь, что путь правильный


interface MainContextType {
  user: userStore;
  basket: basketStore;
  products: productsStore;
  productModal: (Boolean | ((newState: boolean) => void))[];
}
interface MainProviderProps {
  children: ReactNode;
}


export const MainContext = createContext<MainContextType>({
  user: {} as userStore, // Временное значение, заменяется в провайдере
  basket: {} as basketStore,
  products: {} as productsStore,
  productModal: [],
});

export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const user = new userStore();
  const basket = new basketStore();
  const products = new productsStore();

  const modal = new stateStore();
  const [ showModal, setState ] = useState(modal.state);
  const setShowModal = (newState: boolean) => {
    modal.setState(newState);
    setState(modal.state);
    console.log(newState);
  }
  const productModal: TypeShowModal = [showModal, setShowModal];

  return (
    <MainContext.Provider value={{ user, basket, products, productModal}}>
      {children}
    </MainContext.Provider>
  );
};