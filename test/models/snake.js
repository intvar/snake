'use script';
import Snake from '../../models/snake';
import {assert} from 'chai';

describe('Snake model',()=>{
  it('move left', ()=>{
    const snake = new Snake([{x:5,y:5}, {x:6,y:5}, {x:7,y:5}]);
    snake._left();
    assert.deepEqual(snake.body, [{x:4,y:5}, {x:5,y:5}, {x:6,y:5}]);
  });
  it('move right', ()=>{
    const snake = new Snake([{x:7,y:5}, {x:7,y:6}, {x:7,y:7}]);
    snake._right();
    assert.deepEqual(snake.body, [{x:8,y:5}, {x:7,y:5}, {x:7,y:6}]);
  });
  it('move up', ()=>{
    const snake = new Snake([{x:7,y:5}, {x:7,y:6}, {x:7,y:7}]);
    snake._up();
    assert.deepEqual(snake.body, [{x:7,y:4}, {x:7,y:5}, {x:7,y:6}]);
  });
  it('move down', ()=>{
    const snake = new Snake([{x:7,y:7}, {x:7,y:6}, {x:7,y:5}]);
    snake._down();
    assert.deepEqual(snake.body, [{x:7,y:8}, {x:7,y:7}, {x:7,y:6}]);
  });
});