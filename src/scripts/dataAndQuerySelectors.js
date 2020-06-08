"use strict";

const width = 700;
const height = 700;
let inputEls, winningPlayer, numberRounds, numberRoundsInput;
let snakes = [];
let inputElsArray = [];
let currentPlayers = [];
let arrayToBeSorted = [];
let snakePointCount = 0;
let snakeSectionLength = 100;
let holeLength = 8;
let gameOver = false;
let isReset = false;
let roundOver = true;
let isFirstInitialise = true;

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

// Query selectors used globally throughout game functions
const btnNewGame = document.querySelector(".btn--new-game");
const snakeImg = document.querySelector(".snake-img");
const gameBtns = document.querySelector(".game-btns");
const btnRestart = document.querySelector(".btn--restart");
const btnYes = document.querySelector(".btn--yes");
const btnNo = document.querySelector(".btn--no");
const victoryMessage = document.querySelector(".settings__winning-text");
const areYouSureBox = document.querySelector(".are-you-sure");
const settingsContainer = document.querySelector(".settings");
const heading = document.querySelector(".heading");
const playerBtns = document.querySelectorAll(".player-btns");
const playerForm = document.querySelector(".player-form");
const scoreBoard = document.querySelector(".score-board");
const spaceBarText = document.querySelector(".objectives__space-bar");
const objectivesDiv = document.querySelector(".objectives");
const startScreen = document.querySelector(".start-screen");
const gameScreen = document.getElementById("game-screen");
const winLimit = document.querySelector(".objectives__win-limit span");
