'use strict';

export default class Field {
  constructor() {
    this.numberCellLine = 25;
    this.sizeSide = 600;
    const canvas = document.getElementById('snake');
    canvas.width = this.sizeSide;
    canvas.height = this.sizeSide;
    this.context = canvas.getContext('2d');
  }
  drawSquare(x,y) {
    const sizeCell = this.sizeSide / this.numberCellLine;
    this.context.fillStyle = 'black';
    this.context.fillRect((x - 1 ) * sizeCell + 1, (y - 1) * sizeCell + 1,
      sizeCell-1, sizeCell-1);
  }
  render(){
    this.context.fillStyle = 'white';
    this.context.fillRect(0,0,this.sizeSide,this.sizeSide);
  }
}