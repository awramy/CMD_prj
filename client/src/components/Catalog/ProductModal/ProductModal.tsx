import css from './ProductModal.module.scss'
import {FC, MouseEventHandler, useContext} from "react";
import {MainContext} from "../../../contexts/mainContext.tsx";
import {TypeProduct} from "../../../../types/types.ts";
type TypeProductModal = Partial<TypeProduct> & {
  onClick?: MouseEventHandler<HTMLButtonElement>
  show: Boolean
}


const ProductModal: FC<TypeProductModal> = ({show, name, price, image, description, pattern, info}) => {

  const { user } = useContext(MainContext);

  return (
    <>
    {/*<div className={css.modal_overlay}/>*/}
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
            <button className={css.basket_butt}>В корзину</button>
            <button className={css.close_butt}>
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