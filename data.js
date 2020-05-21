'use strict';

const players = [
  {
    id: 1,
    score: 0,
    color: [255, 204, 0],
    playerName: '',
    startingX: 150,
    startingY: 150,
    leftKey: 37,
    rightKey: 39,
  },
  {
    id: 2,
    score: 0,
    color: [255, 0, 0],
    playerName: '',
    startingX: 450,
    startingY: 150,
    leftKey: 65,
    rightKey: 83,
  },
  {
    id: 3,
    score: 0,
    color: [0, 204, 0],
    playerName: '',
    startingX: 150,
    startingY: 450,
    leftKey: 70,
    rightKey: 71,
  },
  {
    id: 4,
    score: 0,
    color: [0, 0, 255],
    playerName: '',
    startingX: 450,
    startingY: 450,
    leftKey: 74,
    rightKey: 75,
  },
];

let curves = [];
const width = 700;
const height = 700;
let curveCount = 0;
let curveSectionLength = 100;
let holeLength = 8;
let gameOver = true;
let isFirstInitialise = true;
let isReset = false;


