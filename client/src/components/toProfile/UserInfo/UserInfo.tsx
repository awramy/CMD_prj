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
      <img className={css.user_photo} src={`${import.meta.env.VITE_REACT_APP_API_URL}/userPhotos/3.jpg`}/>

      <div className={css.user_info}>
        <p>{user.userInfo.name}</p>
        <div className={css.balance_info_title}>Бонусные коины:</div>
        <div className={css.balance_info}>
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16H13C13.6667 16 15 15.6 15 14C15 12.4 13.6667 12 13 12H11C10.3333 12 9 11.6 9 10C9 8.4 10.3333 8 11 8H12M12 16H9M12 16V18M15 8H12M12 8V6M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {user.userInfo.balance}
          <button>Потратить</button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;