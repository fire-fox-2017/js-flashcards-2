"use strict"
// write your code here
var Model = require('./model');
var Show = require('./view');

class FlashCard {
  constructor () {
    this._file = "";
    this._cards = [];

    this._model = new Model();
    this._show = new Show();
  }

  initApp() {
    let file = this.getFilename();
    if (file) {
      this._file = file;
      this._cards = this._model.loadJsonFile(this._file);
    }
    else {
      console.log("Cannot load the file");
    }

  }

  getFilename() {
    let params = [];
    process.argv.forEach( (val, index, array) => {
      if(index > 1) {
        params.push(val);
      }
    });

    console.log("params",params);
    if(params.length) {
      let file = params.join();
      console.log(file);
      return file;
    }

    return false;
  }


  practice() {
    if (!this._cards.length) {
      console.log("No cards");
      return;
    }

    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this._show.printWelcomeMsg();

    let i = 0;

    this._show.printCard(this._cards[i]);
    rl.setPrompt("Guess: ");
    rl.prompt();

    rl.on('line', (input) => {
        if(input == this._cards[i]['term']) {
          console.log("Correct!");
          i += 1;
          if( i < this._cards.length) {
            this._show.printCard(this._cards[i]);
            rl.prompt();
          }
          else {
            // console.log("here");
            // this._show.printEndPractice();
            rl.close();
          }
        }
        else {
          console.log("Incorrect! Try again\n");
          rl.prompt();
        }

    }).on('close', () => {
      this._show.printEndPractice();
    });
  } // end of practice

  practiceAdvanced() {
    if (!this._cards.length) {
      console.log("No cards");
      return;
    }

    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this._show.printWelcomeMsg();

    let cards = this._cards;
    let i = 0;

    this._show.printCard(cards[i]);
    rl.setPrompt("Guess: ");
    rl.prompt();

    rl.on('line', (input) => {
        if(input == cards[i]['term']) {
          console.log("Correct!");
          // i += 1;
          if(cards.length > 0) {
            console.log("haha");
            cards.shift();

            if(cards.length == 0)
              rl.close();
            else {
              this._show.printCard(cards[i]);
              rl.prompt();
            }

          }
          else {
            // console.log("here");
            // this._show.printEndPractice();
            rl.close();
          }
        }
        else if(input == "skip") {
          cards.push(cards.shift());
          this._show.printCard(cards[i]);
          rl.prompt();
        }
        else {
          console.log("Incorrect! Try again\n");
          rl.prompt();
        }

    }).on('close', () => {
      this._show.printEndPractice();
    });
  } // end of practiceAdvanced

}

module.exports = FlashCard;
