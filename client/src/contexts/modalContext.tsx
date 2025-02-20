import { TypeShowModal } from "../../types/types.ts";
import React, {createContext, ReactNode, useState} from "react";

export const ModalContext = createContext<TypeShowModal>({
  showModal: true,//временные значения
  setShowModal: (() => {})
});

export const ModalProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};