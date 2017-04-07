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

  printHelpCardFormat() {
    console.log("Card format in the json file is not valid.\n");

    console.log(`Example of card format:`);
    console.log(`[\n  {"definition": "Pada tahun 1602,Belanda mendirikan usaha dagang yang diberi nama", "term": "VOC"},\n  {"definition": "Konferensi Meja Bundar diadakan di Kota ...", "term": "Bandung"},\n  {"definition": "Presiden RI Ke-3 adalah", "term": "Habibie"}\n]\n`);
  }

  printEndPractice(guess_count) {
    console.log(`\nGuess Count: ${guess_count}`);
    console.log(`\nCongrats, you have completed your practice!`);
  }
}

module.exports = Show;
