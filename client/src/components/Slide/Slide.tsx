import {FC, useContext} from 'react';
import css from './Slide.module.scss'
import {MainContext} from "../../contexts/mainContext.tsx";
// @ts-ignore
import 'swiper/css';
import {observer} from "mobx-react-lite";

interface ISlideProps {
  image: {
    id: number;
    path: string;
  }
}

const Slide: FC<ISlideProps> = observer(({image}) => {

  //вытаскиваем user из юзерКонтекста, используем для управления user.activePhoto
  const context = useContext(MainContext);
  if (!context) {
    return null;
  }
  const { user } = context;



  return (
    <div
      className={`${css.slide} ${image === user.activePhoto ? 'active' : ''}`}
      onClick={() => user.setActivePhoto(image)}
    >
      <img src={import.meta.env.VITE_REACT_APP_API_URL + '/userPhotos/' + image.path}/>
    </div>
  );
})

export default Slide;