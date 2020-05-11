'use strict';

let curve1;
let curve2;

const createCurve = () => {
  curve1 = new Curve([0, 0, 255], LEFT_ARROW, RIGHT_ARROW);
  curve2 = new Curve([0, 204, 0], 65, 68);
};

function setup() {
  createCanvas(600, 600);
  frameRate(50);
  createCurve();
}

function draw() {
  curve1.update();
  curve2.update();
  

  curve1.steering();
  curve2.steering();

  curve1.collision();
  curve2.collision();
}
