'use strict';

const players = [
  { color: [255, 204, 0], startingX: 150, startingY: 150, leftKey: 37, rightKey: 39 },
  { color: [255, 0, 0], startingX: 450, startingY: 150, leftKey: 65, rightKey: 83 },
  { color: [0, 204, 0], startingX: 150, startingY: 450, leftKey: 70, rightKey: 71 },
  { color: [0, 0, 255], startingX: 450, startingY: 450, leftKey: 74, rightKey: 75 }
];

let curveCount = 0;
let curveSectionLength = 500;
let holeLength = 20;