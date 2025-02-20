import container from './Container.module.scss'
import * as React from "react";
import {useContext} from "react";
import {ModalContext} from "../../contexts/modalContext.tsx";

interface ContainerProps {
  children: React.ReactNode;
}


const Container: React.FC<ContainerProps> = ({children}) => {
  const { showModal } = useContext(ModalContext);

  return (
    <div className={`${container.container} ${showModal ? container.no_scroll : ''}`}>
      {children}
    </div>
  );
};

export default Container;