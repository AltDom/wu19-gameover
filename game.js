'use strict';

const createCurve = () => {
  for (let i = 0; i < playersCount; i++) {
    curves[i] = new Curve(
      players[i].color,
      players[i].startingX,
      players[i].startingY,
      players[i].leftKey,
      players[i].rightKey
    )
  }
};

function setup() {
  createCanvas(width, height);
  frameRate(50);
  createCurve();
  playersRemaining = playersCount;
}

function draw() {
  if (gameOver) {
    noLoop();
    return;
  }
  curves.forEach((curve) => {
    curve.update();
    curve.steering();
    curve.collision();
  });
}
