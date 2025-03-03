import css from './listitem.module.scss'
import * as React from "react";
import {TypeProduct} from "../../../../../types/types.ts";

type TypeListItem = Partial<TypeProduct> & {
  onClick: () => void,
  activePhoto: string
}

const ListItem: React.FC<TypeListItem> = ({activePhoto, onClick, name, price, image, pattern}) => {

  return (
    <div className={css.list_item} onClick={onClick}>
      <img className={css.main_image} src={import.meta.env.VITE_REACT_APP_API_URL + '/productPhotos/' + image} alt="user"/>
      <img className={css.print_image} style={pattern} src={import.meta.env.VITE_REACT_APP_API_URL + '/selectPhotos/' + activePhoto}  alt=''/>
      <div className={css.bottom_info}>
        <button>{price}</button>
        <div className={css.info_title}>{name}</div>
      </div>
    </div>
  );
}

export default ListItem;