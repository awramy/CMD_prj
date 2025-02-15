import { FC } from 'react';
import css from './Header.module.scss'

const Header: FC = () => {
  return (
    <div className={css.header}>
      <div>{window.Telegram.WebApp.initDataUnsafe.user?.first_name}</div>
      <img className={css.logo} src={import.meta.env.VITE_REACT_APP_API_URL + '/internal/logo1.png'}/>
    </div>
  );
};

export default Header;