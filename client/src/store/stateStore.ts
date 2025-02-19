

export default class stateStore {
  private _state: Boolean
  constructor() {
    this._state = false
  }

  setState(state: boolean) {
    this._state = state
  }
  get state() {
    return this._state
  }
}