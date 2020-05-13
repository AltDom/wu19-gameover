'use strict';

const players = [
  { id: 1, score: 0, color: [255, 204, 0], startingX: 150, startingY: 150, leftKey: 37, rightKey: 39 },
  { id: 2, score: 0, color: [255, 0, 0], startingX: 450, startingY: 150, leftKey: 65, rightKey: 83 },
  { id: 3, score: 0, color: [0, 204, 0], startingX: 150, startingY: 450, leftKey: 70, rightKey: 71 },
  { id: 4, score: 0, color: [0, 0, 255], startingX: 450, startingY: 450, leftKey: 74, rightKey: 75 }
];
 
let curves = [];
const width = 600;
const height = 600;
let curveCount = 0;
let curveSectionLength = 300;
let holeLength = 10;
let playersCount = 2;
let currentPlayers = [];
let gameOver = false;


const btn = document.querySelector('.btn--new-game');