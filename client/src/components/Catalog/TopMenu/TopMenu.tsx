import css from "./TopMenu.module.scss"
import {ChangeEvent, useContext, useEffect, useRef, useState} from "react";
import {fetchSelectPhoto} from "../../../http/userAPI.ts";
import {MainContext} from "../../../contexts/mainContext.tsx";
import {observer} from "mobx-react-lite";

const TopMenu = observer(() => {

  const { user } = useContext(MainContext)
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }
  const clearFile = () => {
    setFile(null)
    if(fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  useEffect(() => {
    if(file instanceof File){
      fetchSelectPhoto(file)
        .then(data => {
          user.setActivePhoto(data.data)
        })
    }}, [file])

  return (
    <div className={css.top_menu}>
      <div className={css.select_photo_cont}>
        <svg className={css.select_photo_svg} width="30px" height="30px" viewBox="0 0 1920 1920"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M392.26 1042.5c137.747-57.67 292.85-15.269 425.873 116.217l4.394 4.833c116.656 146.425 149.5 279.119 97.873 394.237-128.85 287.138-740.692 328.77-810.005 332.504L0 1896.442l61.953-91.83c.989-1.539 105.013-158.728 105.013-427.192 0-141.811 92.6-279.558 225.294-334.92ZM1728.701 23.052c54.923-1.099 99.96 15.268 135.111 49.43 40.643 40.644 58.109 87.877 56.021 140.603C1908.85 474.52 1423.33 953.447 1053.15 1280.79c-24.276-64.81-63.711-136.21-125.335-213.102l-8.787-9.886c-80.078-80.187-169.163-135.11-262.423-161.473C955.276 558.002 1460.677 33.927 1728.701 23.052Z"
            fillRule="evenodd"/>
        </svg>
        <div className={css.select_photo_text}>
          Загрузи свое фото <br/>и выбери дизайн
        </div>
        <label htmlFor='fileInput' className={css.select_photo_butt}> Take
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22Z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.3099 18.6881C12.5581 19.3396 11.4419 19.3396 10.6901 18.6881L5.87088 14.5114C4.47179 13.2988 5.32933 11 7.18074 11L9.00001 11V3C9.00001 1.89543 9.89544 1 11 1L13 1C14.1046 1 15 1.89543 15 3L15 11H16.8193C18.6707 11 19.5282 13.2988 18.1291 14.5114L13.3099 18.6881ZM11.3451 16.6091C11.7209 16.9348 12.2791 16.9348 12.6549 16.6091L16.8193 13H14.5C13.6716 13 13 12.3284 13 11.5V3L11 3V11.5C11 12.3284 10.3284 13 9.50001 13L7.18074 13L11.3451 16.6091Z"/>
          </svg>
        </label>
        <input
          id="fileInput"
          type="file"
          className={css.file_input}
          onChange={selectFile}
          ref={fileInputRef}
        />
        {
          file &&
          <button
            className={css.selected_photo_info}
            onClick={clearFile}
          >
            <p>...png</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024"><path fillRule="evenodd" d="M880 112c17.7 0 32 14.3 32 32v736c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32Zm-40 72H184v656h656zM640.013 338.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254L384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019a.199.199 0 0 1-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"/></svg>
          </button>
        }
        <div className={css.gradient}>
          <div className={css.effect}/>
        </div>

        <div className={css.top_decoration}>
          <div className={css.decor_items}>
            <svg className={`${css.decor_item} ${css.decor_item1}`} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"/>
              <path d="M12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z"/>
            </svg>

            <svg className={`${css.decor_item} ${css.decor_item2}`} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0005 13.9001V16.1901C22.0005 19.8301 19.8305 22.0001 16.1905 22.0001H7.81055C5.26055 22.0001 3.42055 20.9301 2.56055 19.0301L2.67055 18.9501L7.59055 15.6501C8.39055 15.1101 9.52055 15.1701 10.2305 15.7901L10.5705 16.0701C11.3505 16.7401 12.6105 16.7401 13.3905 16.0701L17.5505 12.5001C18.3305 11.8301 19.5905 11.8301 20.3705 12.5001L22.0005 13.9001Z"/>
              <path opacity="0.4" d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 2.63 16.08 2.29 16.22 2C16.21 2 16.2 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03L2.67 18.95L7.59 15.65C8.39 15.11 9.52 15.17 10.23 15.79L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9V7.81C22 7.8 22 7.79 22 7.78C21.71 7.92 21.37 8 20.97 8Z"/>
              <path d="M8.99914 10.3801C10.3136 10.3801 11.3791 9.31456 11.3791 8.00012C11.3791 6.68568 10.3136 5.62012 8.99914 5.62012C7.6847 5.62012 6.61914 6.68568 6.61914 8.00012C6.61914 9.31456 7.6847 10.3801 8.99914 10.3801Z"/>
              <path d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.19 4.31C21.07 4.43 20.91 4.49 20.75 4.49C20.59 4.49 20.43 4.43 20.31 4.31L20.13 4.13V6.37C20.13 6.72 19.85 7 19.5 7C19.15 7 18.87 6.72 18.87 6.37V4.13L18.69 4.31C18.45 4.55 18.05 4.55 17.81 4.31C17.57 4.07 17.57 3.67 17.81 3.43L19.06 2.18C19.11 2.13 19.18 2.09 19.25 2.06C19.27 2.05 19.29 2.05 19.31 2.04C19.36 2.02 19.41 2.01 19.47 2.01C19.49 2.01 19.51 2.01 19.53 2.01C19.6 2.01 19.66 2.02 19.73 2.05C19.74 2.05 19.74 2.05 19.75 2.05C19.82 2.08 19.88 2.12 19.93 2.17C19.94 2.18 19.94 2.18 19.95 2.18L21.2 3.43C21.44 3.67 21.44 4.07 21.19 4.31Z"/>
            </svg>

            <svg className={`${css.decor_item} ${css.decor_item3}`} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M1.25 21C1.25 20.5858 1.58579 20.25 2 20.25L22 20.25C22.4142 20.25 22.75 20.5858 22.75 21C22.75 21.4142 22.4142 21.75 22 21.75L2 21.75C1.58579 21.75 1.25 21.4142 1.25 21Z"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.00174 13C3 12.6878 3 12.355 3 12V7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H13C14.8856 3 15.8284 3 16.4142 3.58579C16.649 3.82059 16.7897 4.11275 16.874 4.5H18C20.5261 4.5 22.75 6.31185 22.75 8.75C22.75 11.1882 20.5261 13 18 13H3.00174ZM16.9957 6C17 6.30037 17 6.63226 17 7V11.5H18C19.8921 11.5 21.25 10.1778 21.25 8.75C21.25 7.32216 19.8921 6 18 6H16.9957Z"/>
              <path opacity="0.4" d="M9.00021 18H11.0002C13.8286 18 15.2429 18 16.1215 17.1213C16.8899 16.3529 16.9864 15.175 16.9985 13H3.00195C3.01406 15.175 3.11051 16.3529 3.87889 17.1213C4.75757 18 6.17179 18 9.00021 18Z"/>
            </svg>

            <svg className={`${css.decor_item} ${css.decor_item4}`} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.98001C3 3.34001 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.34001 21 4.98001V15.89C21 17.52 19.66 18.86 18 18.86Z"/>
              <path d="M12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51001C7.5 8.12001 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12001 16.5 9.51001C16.49 12.66 13.58 14.51 12.28 14.96Z"/>
            </svg>
          </div>

          <div className={css.loader}/>
        </div>
      </div>

      <div className={css.open_gallery_cont}>
        <div className={css.open_gallery_block}>

          <div className={css.open_gallery_text}>
            Каталог трендов - топ дизайны
          </div>
          <button className={css.open_gallery_butt}>Выбрать</button>
        </div>
      </div>

      <div className={css.filter_cont}>
        <input type="radio" id="radio-1" name="tabs" />
        <label className={css.filter_tab} htmlFor="radio-1">Мужское<span className={css.notification}>2</span></label>
        <input type="radio" id="radio-2" name="tabs"/>
        <label className={css.filter_tab} htmlFor="radio-2">Женское</label>
        <input type="radio" id="radio-3" name="tabs"/>
        <label className={css.filter_tab} htmlFor="radio-3">Унисекс</label>
        <span className={css.glider}></span>
      </div>
    </div>
  )
})

export default TopMenu;