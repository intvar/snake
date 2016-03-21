'use strict';

export default class Field {
  constructor() {
    this.numberCellLine = 25;
    this.sizeSide = 400;
    const canvas = document.getElementById('snake');
    canvas.width = this.sizeSide;
    canvas.height = this.sizeSide;
    this.context = canvas.getContext('2d');
  }
  // drawSquare(x,y) {
  //   context.fillStyle = 'black';
  //   var sizeCell = sizeSide / numberCellLine;
  //   context.fillRect((x - 1 )  * sizeCell + 1,(y - 1) * sizeCell + 1,sizeCell-1,sizeCell-1);
  // }
  clear(){
    this.context.fillStyle = 'white';
    this.context.fillRect(0,0,this.sizeSide,this.sizeSide);
  }
}