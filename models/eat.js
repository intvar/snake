'use strict';
import {getRandNumb} from '../lib/util';

export default class Eat {
  constructor(field) {
    const numberCellLine = field.numberCellLine;
    this.x = getRandNumb(numberCellLine);
    this.y = getRandNumb(numberCellLine);
  }
  render(field) {
    field.drawSquare(this.x, this.y);
  }
}
