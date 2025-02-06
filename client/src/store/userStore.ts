import {makeAutoObservable} from "mobx";

type TypeUserPhotos = {
  id: number;
  path: string;
}[];
type TypeActivePhoto = {
  id?: number;
  path?: string;
};

export default class userStore {
  private _photos: TypeUserPhotos;
  private _activePhoto: TypeActivePhoto;
  constructor() {
    this._photos = []
    this._activePhoto = {}
    makeAutoObservable(this)
  }
  setPhotos(photos: TypeUserPhotos) {
    this._photos = photos
  }
  setActivePhoto(activePhoto: TypeActivePhoto) {
    this._activePhoto = activePhoto
  }

  get photos() {
    return this._photos
  }
  get activePhoto() {
    return this._activePhoto
  }
}