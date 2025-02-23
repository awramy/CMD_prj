import css from './UserInfo.module.scss'
import {useContext} from "react";
import {MainContext} from "../../../contexts/mainContext.tsx";

const UserInfo = () => {

  //вытаскиваем user из Контекста, используем для управления user.userInfo
  const context = useContext(MainContext);
  if (!context) {
    return null;
  }
  const { user } = context;

  return (
    <div className={css.user_info_cont}>
      <img className={css.user_photo} src={`${import.meta.env.VITE_REACT_APP_API_URL}/userPhotos/3.jpg`} alt=''/>

      <div className={css.user_info}>
        <p>{user.userInfo.name}</p>
      </div>
    </div>
  );
};

export default UserInfo;