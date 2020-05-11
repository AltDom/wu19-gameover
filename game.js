'use strict';

let curve1;
let curve2;

const createCurve = () => {
  curve1 = new Curve([0, 0, 255]);
  curve2 = new Curve([0, 204, 0]);
};

function setup() {
  createCanvas(600, 600);
  frameRate(50);
  createCurve();
}

function draw() {
  curve1.update();
  curve2.update();
  if (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)) {
    curve1.updateAngle(0);
  } else if (keyIsDown(LEFT_ARROW)) {
    curve1.updateAngle((2 * Math.PI) / 90);
  } else if (keyIsDown(RIGHT_ARROW)) {
    curve1.updateAngle((-2 * Math.PI) / 90);
  } else {
    curve1.updateAngle(0);
  }

  if (keyIsDown(65) && keyIsDown(68)) {
    curve2.updateAngle(0);
  } else if (keyIsDown(65)) {
    curve2.updateAngle((2 * Math.PI) / 90);
  } else if (keyIsDown(68)) {
    curve2.updateAngle((-2 * Math.PI) / 90);
  } else {
    curve2.updateAngle(0);
  }

  curve1.collision();
  curve2.collision();
}
