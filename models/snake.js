'use strict';

export default class Snake {
  constructor(body=[{x:7,y:5}, {x:6,y:5}, {x:5,y:5}]){
    this.body = body;
    this.head = body[0];
  }
  left() {
    this._move();
    this.body[0].x--;
  }
  right(){
    this._move();
    this.body[0].x++;
  }
  up(){
    this._move();
    this.body[0].y--;
  }
  down(){
    this._move();
    this.body[0].y++;
  }
  _move(){
    for(let i = this.body.length-1; i>0; i--) {
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }
  }
}