import css from './BasketItem.module.scss'
import {FC, useContext, useEffect, useState} from "react";
import {MainContext} from "../../../../contexts/mainContext.tsx";
import {TypeBasketItem, TypeProduct} from "../../../../../types/types.ts";
import {toJS} from "mobx";

interface BasketItemProps {
  basketItem: TypeBasketItem
}
const BasketItem: FC<BasketItemProps> = ({basketItem}) => {

  const [targetProduct, setTargetProduct] = useState<TypeProduct | undefined>(undefined)
  const { products } = useContext(MainContext)

  useEffect(() => {
    const foundProduct = products.products.find(item => item.id === basketItem.product_id)
    setTargetProduct(foundProduct ? toJS(foundProduct) : undefined)
  }, [])


  return (
    <div className={css.item_cont}>
      <div className={css.item_photo_cont}>
        <img className={css.main_image} src={import.meta.env.VITE_REACT_APP_API_URL + '/' + targetProduct?.image}
             alt="user"/>
        <img className={css.print_image} style={targetProduct?.pattern}
             src={import.meta.env.VITE_REACT_APP_API_URL + '/userPhotos/' + basketItem.printImage}/>
      </div>
      <div className={css.item_description}>
        <div className={css.item_name}>{targetProduct?.name}</div>
        <div className={css.item_price}>{targetProduct?.price}</div>
        <button className={css.delete_item_butt}>Удалить</button>
      </div>
    </div>
  );
};

export default BasketItem;