import { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from "../Slide/Slide.tsx";
import css from "./Slider.module.scss"
// @ts-ignore
import 'swiper/css';
import {observer} from "mobx-react-lite";

type TypeUserPhotos = {
  id: number;
  path: string;
}[];

const userPhotos: TypeUserPhotos = [
  {id: 1, path: '2png.png'},
  {id: 2, path: '3png.png'},
  {id: 3, path: '3.jpg'},
  {id: 4, path: '4.jpg'},
  {id: 5, path: '5.jpg'},
  {id: 6, path: '6.jpg'},
  {id: 7, path: '1png.png'},
]

const Slider: FC = observer(() => {

  return (
    <Swiper
      className={css.slider}
      spaceBetween={50} // Расстояние между слайдами
      slidesPerView={5} // Количество видимых слайдов
    >
      {userPhotos.map((photo) => (
        <SwiperSlide
          key={photo.id}
        >
          <Slide image={photo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default Slider;