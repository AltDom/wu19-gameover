"use strict";

let curves = [];
const width = 700;
const height = 700;
let curveCount = 0;
let curveSectionLength = 100;
let holeLength = 8;
let gameOver = true;
let isFirstInitialise = true;
let isReset = false;

const players = [
  {
    id: 1,
    score: 0,
    color: [255, 204, 0],
    playerName: "",
    startingX: width / 4,
    startingY: height / 4,
    leftKey: 65,
    rightKey: 83,
  },
  {
    id: 2,
    score: 0,
    color: [255, 0, 0],
    playerName: "",
    startingX: (3 * width) / 4,
    startingY: height / 4,
    leftKey: 37,
    rightKey: 39,
  },
  {
    id: 3,
    score: 0,
    color: [0, 204, 0],
    playerName: "",
    startingX: width / 4,
    startingY: (3 * height) / 4,
    leftKey: 70,
    rightKey: 71,
  },
  {
    id: 4,
    score: 0,
    color: [0, 0, 255],
    playerName: "",
    startingX: (3 * width) / 4,
    startingY: (3 * height) / 4,
    leftKey: 74,
    rightKey: 75,
  },
];
