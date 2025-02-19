import {makeAutoObservable} from "mobx";
import {TypeProduct} from "../../types/types.ts";

export default class basketStore {
  private _products: TypeProduct[]
  private _activeProduct: Partial<TypeProduct>

  constructor() {
    this._products = []
    this._activeProduct = {}
    makeAutoObservable(this)
  }
  setProducts(products: TypeProduct[]) {
    this._products = products
  }
  setActiveProduct(product: TypeProduct) {
    this._activeProduct = product
  }

  get products() {
    return this._products
  }
  get activeProduct() {
    return this._activeProduct
  }
}