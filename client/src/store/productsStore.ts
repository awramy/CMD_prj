import {makeAutoObservable} from "mobx";
import {TypeProduct} from "../../types/types.ts";

type TypeProductList = TypeProduct[];

export default class basketStore {
  private _products: TypeProductList;

  constructor() {
    this._products = []
    makeAutoObservable(this)
  }
  setProducts(products: TypeProductList) {
    this._products = products
  }

  get products() {
    return this._products
  }
}