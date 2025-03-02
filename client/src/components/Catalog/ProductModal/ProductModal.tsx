import css from './ProductModal.module.scss'
import {FC, useContext, useEffect, useState} from "react";
import {MainContext} from "../../../contexts/mainContext.tsx";
import {TypeProduct, TypeBasketItem} from "../../../../types/types.ts";
import {checkBasketItem, createBasketItem, deleteBasketItem} from "../../../http/basketAPI.ts";
type TypeProductModal = Partial<TypeProduct> & {
  onClick: () => void
  show: boolean
}


const ProductModal: FC<TypeProductModal> = ({onClick, _id, show, name, price, image, description, pattern, info}) => {

  //получаем контекст для получения значения activePhoto
  const { user } = useContext(MainContext);
  //состояние элемента в корзине(либо null, либо инфо об элементе
  const [basketItem, setBasketItem] = useState<TypeBasketItem | null>(null)

  //подвязываем эффект, при открытии модального окна проверяем есть ли в корзине
  useEffect(() => {
    if(user.activePhoto.path && _id) {
      checkBasketItem(_id, user.activePhoto.path)
        .then(data => {setBasketItem(data)})
        .catch(() => setBasketItem(null))
      console.log(basketItem)
    }
  }, [show])

  //функция добавления/удаления товара из корзины
  const fetchBasket = async () => {
    if(user.activePhoto.path && _id && !basketItem) {
      await createBasketItem(_id, user.activePhoto.path)
        .then(data => setBasketItem(data))
        .catch((e) => console.log(e.message))
    } else if(user.activePhoto.path && _id && basketItem) {
      await deleteBasketItem(basketItem._id)
        .then(() => setBasketItem(null))
        .catch((e) => console.log(e.message))
    }
  }

  return (
    <>
    <div
      className={`${css.modal_overlay} ${!show ? css.hide : ''}`}
      onClick={onClick}
    />
    <div className={`${css.container} ${!show ? css.hide : ''}`}>
      <div className={css.main_section}>
        <div className={css.image_cont}>
          <img className={css.main_image} src={import.meta.env.VITE_REACT_APP_API_URL + '/productPhotos/' + image}
               alt="user"/>
          <img className={css.print_image} style={pattern}
               src={import.meta.env.VITE_REACT_APP_API_URL + '/selectPhotos/' + user?.activePhoto.path} alt=''/>
        </div>
        <div className={css.desc_cont}>

          <div className={css.navbar}>
            <button
              className={`${css.basket_butt} ${!user.activePhoto.path? css.disable: basketItem? css.active: ''}`}
              onClick={fetchBasket}
            >{`${!user.activePhoto.path? 'Выберите принт': basketItem? 'Удалить': 'В корзину'}`}</button>
            <button
              className={css.close_butt}
              onClick={onClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fillRule="evenodd" d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"/></svg>            </button>
          </div>

          <div className={css.name}>{name}</div>
          <div className={css.price}>{String(price)} руб</div>
          <div className={css.description}>{description}</div>
        </div>
      </div>
      <div className={css.info_section}>
        {
          info?.map((item, index) =>
            <div className={css.info_item} key={index}>
              <div className={css.info_item_title}>{item.title}</div>
              <div className={css.info_item_value}>{item.description}</div>
              <img className={css.info_item_image}
                   src={import.meta.env.VITE_REACT_APP_API_URL + '/internal/' + item.image} alt=''/>
            </div>
          )
        }
      </div>
    </div>
    </>
  );
};

export default ProductModal;