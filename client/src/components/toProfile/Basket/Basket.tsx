import css from './Basket.module.scss'
import {useContext} from "react";
import {MainContext} from "../../../contexts/mainContext.tsx";
import BasketItem from "./BasketItem/BasketItem.tsx";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {

  const { basket } = useContext(MainContext)

  // console.log(basket.basket)

  return (
    <div className={css.basket_cont}>
      {
        basket.basket.map((basketItem) => (
          <BasketItem key={basketItem.id} basketItem={basketItem} />
        ))
      }
    </div>
  );
});

export default Basket;