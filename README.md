# Snake Pit 
[![Netlify Status](https://api.netlify.com/api/v1/badges/c23cfb71-0d44-499a-9c12-7cca55ac8b1c/deploy-status)](https://app.netlify.com/sites/snake-pit/deploys) 

This is a desktop game called **Snake Pit** inspired by the 1995 classic [Achtung, die Kurve!](https://en.wikipedia.org/wiki/Achtung,_die_Kurve!) It was built using third-party WebGL framework [p5.js](https://p5js.org/), (vanilla) JavaScript, CSS and HTML. All of the code in this project was developed together by Jesper Lundqvist and Dominic Kersch using either Discord screen-sharing or pair programming methods.

## Authors
* [Dominic Kersch](https://github.com/AltDom)
* [Jesper Lundqvist](https://github.com/jesperlndqvst)

## About This Project
* Snake Pit is a multiplayer snake game which supports 2-4 players. 
* Choose the number of players, enter your players' names as well as a target number of rounds. 
* Win rounds by being the last remaining snake to avoid collision with other snake tails (or your own).
* Each snake's tail will periodically leave a gap which, used tactfully, can be used to pass through another snake.
* The first player to defeat all other opponents by two rounds after reaching the target wins the game. 

## Play Online 
* You can play online at [Netlify](http://snake-pit.netlify.com).

## Preview

<img src="https://i.imgur.com/TRtnKFR.png">
<img src="https://i.imgur.com/ukxHNHh.png">

## Clone the Project Files
* Clone the repository using `git clone https://github.com/AltDom/wu19-gameover.git` in your chosen bash terminal.
* Enter the project folder using the command `cd wu19-gameover/`.
* Run the project in your default editor using the command `code .`.
* Go live in your chosen browser.

## Pull Request Log
<details><summary>Click to expand</summary>
  <a href="https://github.com/AltDom/wu19-gameover/pull/1" >#1 - Create initial snake class</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/2" >#2 - Add logic for making a trail</a><br>   
  <a href="https://github.com/AltDom/wu19-gameover/pull/3" >#3 - Remove canvas refresh and show()</a><br>   
  <a href="https://github.com/AltDom/wu19-gameover/pull/4" >#4 - Add function to track collisions</a><br>   
  <a href="https://github.com/AltDom/wu19-gameover/pull/5" >#5 - Refactor the code structure</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/6" >#6 - Code steering and dual snake collision</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/7" >#7 - Create object for players data and add four player support</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/8" >#8 - Randomise start direction and loop boundaries</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/9" >#9 - Add logic for creating holes in the snake</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/10" >#10 - Game over individual snakes and global boundaries</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/11" >#11 - Number players select, background and css file</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/12" >#12 - Stop game and p5 draw() loop with global game over</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/13" >#13 - Add logic for restarting the game</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/14" >#14 - Determine the winning snake</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/15" >#15 - Build scoreboard logic</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/16" >#16 - Create LICENSE file</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/17" >#17 - Create initial styling</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/18" >#18 - Progress start screen and game screen design</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/19" >#19 - Create logic for start game button when players have input values</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/20" >#20 - Template literals and carry start screen logic through to game screen</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/21" >#21 - Finish scoreboard logic</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/22" >#22 - Add player name into players object</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/23" >#23 - Fix multiplayer capability and coloring / Restructure game functions and event listeners</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/24" >#24 - Change game speed and canvas size, new game logic and blinking text</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/25" >#25 - Add victory message, "are you sure" button and include invincibility while invisible</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/26" >#26 - Keyboard steering, restart function, .editorconfig file and bug fixes</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/27" >#27 - Scoreboard sorting, rename variables and write README.md</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/28" >#28 - Form validations and add display of steering keys</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/29" >#29 - Set favicon, snake image and change controls</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/30" >#30 - Update README.md</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/31" >#31 - Update README.md</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/32" >#32 - Code review by Group 11</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/33" >#33 - Fix Chrome and Firefox rendering faults</a><br> 
  <a href="https://github.com/AltDom/wu19-gameover/pull/34" >#34 - Pull request log :)</a><br>
  <a href="https://github.com/AltDom/wu19-gameover/pull/35" >#35 - Address comments from code review and rename variables</a>
  
</details>

## Game Testers
* Group 03 - Betsy Alva Soplin and Viktor Puke
* Group 04 - Andreas Lindberg and Viktor Sjöblom
* Annie Neikter
* Erik Johansson
* Jack Norris
* Luke Rodely

## Code Review by Emelie Petersson and Oskar Turesson
<details><summary>Click to expand</summary>
<ul>
<li>Overall - Clear naming of functions, makes the code easy to read</li>

<li>Overall - Consistent alignment and easy to see start and ending point of code blocks</li>

<li>Snake.js 43: "this.x + this.increment * Math.sin(this.angle)" is repeated three times, consider storing it in a variable to shorten the code and make it easier to understand</li>

<li>Snake.js 50: "this.y + this.increment * Math.cos(this.angle)" is repeated three times, consider storing it in a variable to shorten the code and make it easier to understand</li>

<li>functions.js - Keep all variables in data.js to keep functions.js shorter</li>

<li>functions.js - Consider adding some comments to make it clear where and when function is used. Also good to describe what a function does</li>

<li>functions.js:31-34 / 74-79 - Try keep styling in separate css-files and add it with classes instead of directly in the js-file</li>

<li>functions.js:108 - Try using more descriptive variable names instead of ex. inputEls use playerNamesInput to make it a bit more understandable</li>

<li>functions.js:113-119 - Consider adding a check for how big the e.target.value is, now you can just change the html so you can play infinite amount of rounds instead of your html limit of 999</li>

<li>functions.js:123 - Consider adding a check so the player can’t be named ” ”, easy to do with a trim to the currentValue.value</li>
</ul>
</details>

## License
This assignment is licensed under the MIT License. You can get all the details [here](https://github.com/AltDom/wu19-gameover/LICENSE). 
