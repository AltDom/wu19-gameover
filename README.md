# Snake Pit

This is a desktop game called **Snake Pit** inspired by the 1995 classic [Achtung, die Kurve!](https://en.wikipedia.org/wiki/Achtung,_die_Kurve!) It was built using third-party WebGL framework [p5.js](https://p5js.org/), (vanilla) JavaScript, CSS and HTML. All of the code in this project was developed together by Jesper Lundqvist and Dominic Kersch using either Discord screen-sharing or pair programming methods.

## Auhtors
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

## Game Testers
* Group 04 - Andreas Lindberg and Viktor Sjöblom
* Group ?? - ?? and ??
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
This assignment is licensed under the MIT License. You can get all the details [here](https://github.com/AltDom/wu19-gameover/public/LICENSE). 
