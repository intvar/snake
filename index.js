'use strict';
// import Snake from 
import Field from './views/field';
// const snake = new Snake(),
//   snakeView = new SnakeView(),
//   keyboardController = new KeyboardController();

const init = () => {
  // keyboardController.addAction(left, snake.left);
  // keyboardController.addAction(right, snake.right);
  // keyboardController.addAction(up, snake.up);
  // keyboardController.addAction(down, snake.down);

  const field = new Field();
  field.clear();
};
init();
// const tick = () => {
//   field.clear();
//   if (snake.isEat(food)) {
//     food = new Food();
//   }
//   snake.move()
//   snakeView.render(snake.get());
//   foodView.render(food.get());
// };