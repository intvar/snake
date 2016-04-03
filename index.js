'use strict';
import Field from './models/field';
import Snake from './models/snake';
import Eat from './models/eat';
import KeyboardController from './controller/keyboard';


const snake = new Snake(),
  field = new Field(),
  keyboardController = new KeyboardController(),
  interval = 200;

let eat = new Eat(field);

const game = () => { 
  field.render();
  snake.render(field);
  eat.render(field);
  snake.move(keyboardController.getPressKey());
  if (snake.isCollision(field)) {
    clearInterval(gameInterval);
  }
  if (snake.isAte(eat)){
    eat = new Eat(field);
  }
};

const gameInterval = setInterval(game, interval);