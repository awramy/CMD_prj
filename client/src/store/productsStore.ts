import {makeAutoObservable} from "mobx";
import {TypeProduct} from "../../types/types.ts";

export default class basketStore {
  private _products: TypeProduct[]
  private _activeProduct: Partial<TypeProduct>
  private _filter: string

  constructor() {
    this._products = []
    this._activeProduct = {}
    this._filter = ''
    makeAutoObservable(this)
  }
  setProducts(products: TypeProduct[]) {
    this._products = products
  }
  setFilter(filter: string) {
    this._filter = filter
  }
  setActiveProduct(product: Partial<TypeProduct>) {
    this._activeProduct = product
  }

  get products() {
    return this._products
  }
  get filter() {
    return this._filter
  }
  get activeProduct() {
    return this._activeProduct
  }
}