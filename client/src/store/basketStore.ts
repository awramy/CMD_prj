import {makeAutoObservable} from "mobx";
import {TypeBasketItem} from "../../types/types.ts";

type TypeBasketList = TypeBasketItem[];

export default class basketStore {
  private _basket: TypeBasketList;

  constructor() {
    this._basket = []
    makeAutoObservable(this)
  }
  setBasket(basket: TypeBasketList) {
    this._basket = basket
  }

  get basket() {
    return this._basket
  }
}