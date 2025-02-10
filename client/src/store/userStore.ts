import {makeAutoObservable} from "mobx";
import {TypeActivePhoto, TypeUserInfo, TypeUserPhotos} from "../../types/types.ts";

export default class userStore {
  private _photos: TypeUserPhotos;
  private _activePhoto: TypeActivePhoto;
  private _userInfo: TypeUserInfo;

  constructor() {
    this._userInfo = {
      id: 1234532,
      name: 'Allex_Tyan',
      balance: 1200,
    }
    this._photos = []
    this._activePhoto = {
      path: `2png.png`
    }
    makeAutoObservable(this)
  }
  setUserInfo(info: TypeUserInfo) {
    this._userInfo = info
  }
  setPhotos(photos: TypeUserPhotos) {
    this._photos = photos
  }
  setActivePhoto(activePhoto: TypeActivePhoto) {
    this._activePhoto = activePhoto
  }

  get userInfo() {
    return this._userInfo
  }
  get photos() {
    return this._photos
  }
  get activePhoto() {
    return this._activePhoto
  }
}