'use strict';

import {left, right, up, down} from '../lib/const';

export default class Snake {
  constructor(body=[{x:7,y:5}, {x:6,y:5}, {x:5,y:5}]){
    this.body = body;
    this.head = body[0];
    this.direction = right;
  }
  _left() {
    this._shift();
    this.body[0].x--;
  }
  _right(){
    this._shift();
    this.body[0].x++;
  }
  _up(){
    this._shift();
    this.body[0].y--;
  }
  _down(){
    this._shift();
    this.body[0].y++;
  }
  _shift(){
    this.body.reduceRight((prev, next)=> {
      prev.x = next.x;
      prev.y = next.y;
      return next;
    });
  }
  _changeDirection(newDirection){
    if (!newDirection) return;
    if (this.direction === right && newDirection === left) return;
    if (this.direction === left && newDirection === right) return;
    if (this.direction === up && newDirection === down) return;
    if (this.direction === down && newDirection === up) return;
    this.direction = newDirection;
  }
  move(newDirection){
    this._changeDirection(newDirection);
    switch(this.direction) {
    case left:this._left(); break;
    case right:this._right(); break;
    case up:this._up(); break;
    case down:this._down(); break;
    }
  }
  render(field){
    this.body.forEach(el=>field.drawSquare(el.x, el.y));
  }
  isCollision(field) {
    const head = this.head,
      body = this.body,
      numberCellLine = field.numberCellLine;

    if (head.x === 0 || head.x >  numberCellLine || 
        head.y === 0 || head.y > numberCellLine)
      return true;

    for(let i = 0; i < body.length; i++)
      for(let j = i + 1; j < body.length; j++)
        if (body[i].x === body[j].x && body[i].y === body[j].y)
          return true;
  }
  isAte(eat){
    const head = this.head;
    if (head.x === eat.x && head.y === eat.y) {
      this.body.push({x:0, y:0});
      return true;
    }
    return false;
  }
}