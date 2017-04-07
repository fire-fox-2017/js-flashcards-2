"use strict"
// write your code here

class Show {
  printWelcomeMsg() {
    console.log("Welcome to JS Flash Cards. To Play, just enter the correct term for each definition. Ready? Go!");
  }

  printCard(card) {

    console.log(`\nDefinition\n${card['definition']}\n`);

  }

  printEndPractice() {
    console.log(`\nCongrats, you have completed your practice!`);
  }
}

module.exports = Show;
