'use strict';

btn.addEventListener('click', () => startGame());

function setup() {
  startGame();
}

function draw() {
  if (gameOver) {
    noLoop();
  }
  
  curves.forEach((curve) => {
    curve.update();
    curve.steering();
    curve.collision();
  });
}

