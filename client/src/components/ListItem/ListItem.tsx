import css from './listitem.module.scss'
import * as React from "react";
import {useContext} from "react";
import {MainContext} from "../../contexts/mainContext.tsx";
import {observer} from "mobx-react-lite";
import {ListItemProps} from "../../../types/interfaces.ts";


const ListItem: React.FC<ListItemProps> = observer(({id, name, price, pattern}) => {

  //вытаскиваем user из юзерКонтекста, используем для управления user.activePhoto
  const { user } = useContext(MainContext);


  return (
    <div className={css.list_item}>
      <img className={css.main_image} src={import.meta.env.VITE_REACT_APP_API_URL + '/' + id + '.png'} alt="user"/>
      <img className={css.print_image} style={pattern} src={import.meta.env.VITE_REACT_APP_API_URL + '/userPhotos/' + user?.activePhoto.path} />
      <div className={css.bottom_info}>
        <button >{price}</button>
        <div className={css.info_title}>{name}</div>
      </div>
    </div>
  );
});

export default ListItem;