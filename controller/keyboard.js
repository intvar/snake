'use strict';

export default class Keyboard {
  constructor() {
    this._prButt = [];
    document.onkeydown = e => {
      this._prButt.push(e.keyCode);
    };
  }
  getPressKey() {
    return this._prButt.shift();
  }
}