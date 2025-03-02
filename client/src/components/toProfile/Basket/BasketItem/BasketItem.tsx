import css from './BasketItem.module.scss'
import {FC, useContext, useEffect, useState} from "react";
import {MainContext} from "../../../../contexts/mainContext.tsx";
import {TypeBasketItem, TypeProduct} from "../../../../../types/types.ts";
import {toJS} from "mobx";
import {deleteBasketItem, fetchBasket} from "../../../../http/basketAPI.ts";
import {observer} from "mobx-react-lite";
import {BasketContext} from "../../../../contexts/basketContext.tsx";


const BasketItem: FC<TypeBasketItem> = observer(({ _id, product_id, print_image }) => {

  //состояние найденного товара
  const [targetProduct, setTargetProduct] = useState<TypeProduct | undefined>(undefined)

  //контекст для управления корзиной (при удалении элемента)
  const { basket, setBasket } = useContext(BasketContext)
  //контекст для получения инфо о товарах(для поиска инфо о товаре в корзине)
  const { products } = useContext(MainContext)

  //при обновлении корзины обновляем фото товара по переданному product_id
  useEffect(() => {
    const foundProduct = products.products.find(item => item._id === product_id)
    setTargetProduct(foundProduct ? toJS(foundProduct) : undefined)
  }, [basket])

  //удаление товара из корзины и обновление корзины
  const deleteBasket = async () => {
    await deleteBasketItem(_id)
      .then(() => fetchBasket())
      .then(data => {
        setBasket(data)
      })
      .catch(error => console.log(error))
  }


  return (
    <div className={css.item_cont}>
      <div className={css.item_photo_cont}>
        <div className={css.item_photo}>
          <img className={css.main_image} src={import.meta.env.VITE_REACT_APP_API_URL + '/productPhotos/' + targetProduct?.image}
               alt="user"/>
          <img className={css.print_image} style={targetProduct?.pattern}
               src={import.meta.env.VITE_REACT_APP_API_URL + '/selectPhotos/' + print_image}/>
        </div>
      </div>
      <div className={css.item_description}>
        <div className={css.item_name}>{targetProduct?.name}</div>
        <div className={css.item_price}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="9.5" cy="10" strokeLinecap="round" strokeLinejoin="round" rx="9.5" ry="10" transform="matrix(-1 0 0 1 20 2)"/><path strokeLinecap="round" strokeLinejoin="round" d="M13 8.8a3.583 3.583 0 0 0-2.25-.8C8.679 8 7 9.79 7 12s1.679 4 3.75 4c.844 0 1.623-.298 2.25-.8"/><path d="M10 2c4.333 0 13 1 13 10s-8.667 10-13 10"/></g></svg>
          {targetProduct?.price} руб
        </div>
        <button
          className={css.delete_item_butt}
          onClick={deleteBasket}
        >Удалить</button>
      </div>
    </div>
  );
});

export default BasketItem;