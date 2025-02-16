import css from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={css.loader}>
      <span className={css.loader_text}>Загрузка</span>
      <span className={css.load}></span>
    </div>
  );
};

export default Loader;