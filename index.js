var letter = require("./letter.js");
//var words = require("./words.js")
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "confirm",
      message: "Welcome to Hangman....Ready to begin?",
      name: "confirm",
      default: true
    },
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.confirm) {
      console.log("Welcome");
      //This is the part of the code where I would want the game to randomly select a predefined word for the game.
    }
    else {
      console.log("\nCome back when you want to play some Hangman");
    }
  });

 	//This is where i will design the functionality of the game, i need to use letter.js and word.js to complete the game. 