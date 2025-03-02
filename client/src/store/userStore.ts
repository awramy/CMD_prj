import {makeAutoObservable} from "mobx";
import {TypeActivePhoto, TypeUserInfo} from "../../types/types.ts";

export default class userStore {
  private _photo: string;
  private _activePhoto: TypeActivePhoto;
  private _userInfo: TypeUserInfo;

  constructor() {
    this._userInfo = {
      id: '12345',
      name: 'Allex_Tyan',
    }
    this._photo = ''
    this._activePhoto = {}
    makeAutoObservable(this)
  }
  setUserInfo(info: TypeUserInfo) {
    this._userInfo = info
  }
  setPhoto(photo: string) {
    this._photo = photo
  }
  setActivePhoto(activePhoto: string) {
    this._activePhoto.path = activePhoto
  }

  get userInfo() {
    return this._userInfo
  }
  get photo() {
    return this._photo
  }
  get activePhoto() {
    return this._activePhoto
  }
}