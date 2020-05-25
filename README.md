# Snake Pit

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

<details><summary>## Pull Request Log</summary>
<ul>
<li>#1 - [Create initial curve class](https://github.com/AltDom/wu19-gameover/pull/1)</li>
<li>#2 - [Add logic for making a trail](https://github.com/AltDom/wu19-gameover/pull/2)</li>
<li>#3 - [Remove canvas refresh and show()](https://github.com/AltDom/wu19-gameover/pull/3)</li>
<li>#4 - [Add function to track collisions](https://github.com/AltDom/wu19-gameover/pull/4)</li>
<li>#5 - [Refactor the code structure](https://github.com/AltDom/wu19-gameover/pull/5)</li>
<li>#6 - [Code steering and dual curve collision](https://github.com/AltDom/wu19-gameover/pull/6)</li>
<li>#7 - [Create object for players data and add four player support](https://github.com/AltDom/wu19-gameover/pull/7)</li>
<li>#8 - [Randomise start direction and loop boundaries](https://github.com/AltDom/wu19-gameover/pull/8)</li>
<li>#9 - [Add logic for creating holes in the curve](https://github.com/AltDom/wu19-gameover/pull/9)</li>
<li>#10 - [Game over individual curves and global boundaries](https://github.com/AltDom/wu19-gameover/pull/10)</li>
<li>#11 - [Number players select, background and css file](https://github.com/AltDom/wu19-gameover/pull/11)</li>
<li>#12 - [Stop game and p5 draw() loop with global game over](https://github.com/AltDom/wu19-gameover/pull/12)</li>
<li>#13 - [Add logic for restarting the game](https://github.com/AltDom/wu19-gameover/pull/13)</li>
<li>#14 - [Determine the winning curve](https://github.com/AltDom/wu19-gameover/pull/14)</li>
<li>#15 - [Build scoreboard logic](https://github.com/AltDom/wu19-gameover/pull/15)</li>
<li>#16 - [Create LICENSE file](https://github.com/AltDom/wu19-gameover/pull/16)</li>
<li>#17 - [Create initial styling](https://github.com/AltDom/wu19-gameover/pull/17)</li>
<li>#18 - [Progress start screen and game screen design](https://github.com/AltDom/wu19-gameover/pull/18)</li>
<li>#19 - [Create logic for start game button when players have input values](https://github.com/AltDom/wu19-gameover/pull/19)</li>
<li>#20 - [Template literals and carry start screen logic through to game screen](https://github.com/AltDom/wu19-gameover/pull/20)</li>
<li>#21 - [Finish scoreboard logic](https://github.com/AltDom/wu19-gameover/pull/21)</li>
<li>#22 - [Add player name into players object](https://github.com/AltDom/wu19-gameover/pull/22)</li>
<li>#23 - [Fix multiplayer capability & coloring / Restructure game functions & event listeners](https://github.com/AltDom/wu19-gameover/pull/23)</li>
<li>#24 - [Change game speed and canvas size, new game logic and blinking text](https://github.com/AltDom/wu19-gameover/pull/24)</li>
<li>#25 - [Add victory message, "are you sure" button and include invincibility while invisible](https://github.com/AltDom/wu19-gameover/pull/25)</li>
<li>#26 - [Keyboard steering, restart function, .editorconfig file and bug fixes](https://github.com/AltDom/wu19-gameover/pull/26)</li>
<li>#27 - [Scoreboard sorting, rename variables and write README.md](https://github.com/AltDom/wu19-gameover/pull/27)</li>
<li>#28 - [Form validations and add display of steering keys](https://github.com/AltDom/wu19-gameover/pull/28)</li>
<li>#29 - [Set favicon, snake image and change controls](https://github.com/AltDom/wu19-gameover/pull/29)</li>
<li>#30 - [Update README.md](https://github.com/AltDom/wu19-gameover/pull/30)</li>
<li>#31 - [update README.md](https://github.com/AltDom/wu19-gameover/pull/31)</li>
<li>#32 - [Code review by Group 11](https://github.com/AltDom/wu19-gameover/pull/32)</li>
<li>#33 - [Fix Chrome and Firefox rendering faults](https://github.com/AltDom/wu19-gameover/pull/33)</li>
<li>#34 - [Pull request log :)](https://github.com/AltDom/wu19-gameover/pull/34)</li>
</ul>
</details>

## Game Testers
* Group 03 - Betsy Alva Soplin and Viktor Puke
* Group 04 - Andreas Lindberg and Viktor Sjöblom
* Annie Neikter
* Erik Johansson
* Jack Norris
* Luke Rodely

## Code Review by Emelie Petersson and Oskar Turesson

Overall - Clear naming of functions, makes the code easy to read

Overall - Consistent alignment and easy to see start and ending point of code blocks

curve.js 43: "this.x + this.increment * Math.sin(this.angle)" is repeated three times, consider storing it in a variable to shorten the code and make it easier to understand.

curve.js 50: "this.y + this.increment * Math.cos(this.angle)" is repeated three times, consider storing it in a variable to shorten the code and make it easier to understand.

functions.js - Keep all variables in data.js to keep functions.js shorter

functions.js - Consider adding some comments to make it clear where and when function is used. Also good to describe what a function does

functions.js:31-34 / 74-79 - Try keep styling in separate css-files and add it with classes instead of directly in the js-file

functions.js:108 - Try using more descriptive variable names instead of ex. inputEls use playerNamesInput to make it a bit more understandable”

functions.js:113-119 - Consider adding a check for how big the e.target.value is, now you can just change the html so you can play infinite amount of rounds instead of your html limit of 999

functions.js:123 - Consider adding a check so the player can’t be named ” ”, easy to do with a trim to the currentValue.value

## License
This assignment is licensed under the MIT License. You can get all the details [here](https://github.com/AltDom/wu19-gameover/LICENSE). 
