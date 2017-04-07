"use strict"
// write your code here

class Show {
  printWelcomeMsg() {
    console.log("Welcome to JS Flash Cards. To Play, just enter the correct term for each definition. Ready? Go!");
    this.printFeature();
  }

  printFeature() {
    console.log("Options: you can type 'skip' to skip a question");
  }

  printWelcomeMsgFile(file) {
    console.log(`Welcome to JS Flash Cards. You're using the deck '${file}'.\nTo Play, just enter the correct term for each definition. Ready? Go!`);
    this.printFeature();
  }

  printCard(card) {

    console.log(`\nDefinition\n${card['definition']}\n`);

  }

  printEndPractice(guess_count) {
    console.log(`\nGuess Count: ${guess_count}`);
    console.log(`\nCongrats, you have completed your practice!`);
  }
}

module.exports = Show;
