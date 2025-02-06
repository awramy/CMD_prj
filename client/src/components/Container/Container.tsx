import container from './Container.module.scss'
import * as React from "react";

interface ContainerProps {
  children: React.ReactNode;
}


const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className={container.container}>
      {children}
    </div>
  );
};

export default Container;