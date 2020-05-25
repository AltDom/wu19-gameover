"use strict";

let curves = [];
const width = 700;
const height = 700;
let curveCount = 0;
let curveSectionLength = 100;
let holeLength = 8;
let gameOver = false;
let roundOver = true;
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
    leftKey: { key: 65, char: "a" },
    rightKey: { key: 83, char: "s" },
  },
  {
    id: 2,
    score: 0,
    color: [255, 0, 0],
    playerName: "",
    startingX: (3 * width) / 4,
    startingY: height / 4,
    leftKey: { key: 52, char: "4" },
    rightKey: { key: 82, char: "r" },
  },
  {
    id: 3,
    score: 0,
    color: [0, 204, 0],
    playerName: "",
    startingX: width / 4,
    startingY: (3 * height) / 4,
    leftKey: { key: 55, char: "7" },
    rightKey: { key: 85, char: "u" },
  },
  {
    id: 4,
    score: 0,
    color: [0, 0, 255],
    playerName: "",
    startingX: (3 * width) / 4,
    startingY: (3 * height) / 4,
    leftKey: { key: 48, char: "0" },
    rightKey: { key: 80, char: "p" },
  },
];
