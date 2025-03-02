import css from './Basket.module.scss'
import {useContext, useEffect} from "react";
import BasketItem from "./BasketItem/BasketItem.tsx";
import {observer} from "mobx-react-lite";
import {fetchBasket} from "../../../http/basketAPI.ts";
import {BasketContext} from "../../../contexts/basketContext.tsx";
import {MainContext} from "../../../contexts/mainContext.tsx";

const Basket = observer(() => {

  const { basket, setBasket } = useContext(BasketContext)
  //контекст для получения инфо о товарах(для поиска инфо о товаре в корзине)
  const { products } = useContext(MainContext)

  useEffect(() => {
    fetchBasket()
      .then(data => {
        setBasket(data)
      })
      .catch(error => console.log(error))
  }, []);

  const countPrice = () => {
    const sum: number = basket.reduce<number>((accum, current) => {
      const foundProduct = products.products.find(item => item._id === current.product_id)
      return Number(foundProduct?.price) + accum
    }, 0)
    return sum
  }


  return (
    <div className={css.basket_cont}>
      <div className={css.basket_title}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M3.977 9.84A2 2 0 0 1 5.971 8h12.058a2 2 0 0 1 1.994 1.84l.803 10A2 2 0 0 1 18.833 22H5.167a2 2 0 0 1-1.993-2.16z"/><path d="M16 11V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v5"/></g></svg>
        Корзина
      </div>
      <div className={css.basket_price}>{`К оплате: ${countPrice()} руб`}</div>
      {
        basket.map((basketItem, index) => (
          <BasketItem key={index} _id={basketItem._id} product_id={basketItem.product_id} print_image={basketItem.print_image}/>
        ))
      }
    </div>
  );
});

export default Basket;