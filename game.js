'use strict';

const createCurve = () => {
  for (let i = 0; i < players.length; i++) {
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
}

function draw() {
  curves.forEach((curve) => {
    curve.update();
    curve.steering();
    curve.collision();
  });
}
