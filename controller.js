"use strict"
// write your code here

import Data from "./model.js"
import View from "./view.js"

class Control {
  constructor() {
    this.view = new View();
    this.data = new Data(this.loadFile());
    this.quiz = this.data.data;
    this.fs = require("fs");
    this.readline = require("readline");
    this.rl = this.readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "Guess: "
    });

  }

  loadFile() {
    const argv = process.argv;
    if (argv.length > 2 && argv[2]) {
      return argv[2];
    } else {
      this.view.requireFileArgv();
      process.exit();
    }
  }

  initApp() {
    this.view.welcome();
    this.flashing();
  }

  flashing(quizIndex = 0) {
    let rl = this.rl;
    let index = quizIndex;

    if (quizIndex < this.quiz.length && !this.quiz[index].hasOwnProperty("falseCount")) {
      this.quiz[index]["falseCount"] = 0;
    }

    if (quizIndex < this.quiz.length) {
      this.showQuestion(index);
      rl.prompt();
      rl.question("Guess (enter 'skip' to skip the question): ", (guess) => {
        if (this.answerCheck(index, guess)) {
          this.view.correct();
          index ++;
          this.flashing(index);
        } else if (guess === "skip") {
          this.quiz.push(this.quiz[index]);
          index ++;
          this.flashing(index);
        } else {
		  this.quiz[index]["falseCount"] ++;
          this.view.incorrect(this.quiz[index]["falseCount"]);
          this.flashing(index);
        }
      });
    } else {
      console.log("\nCongratulation, you have answered all the questions!");
      process.exit();
    }
  }

  showQuestion(index) {
    let question = this.quiz[index].definition;
    this.view.showQuestion(question);
  }

  answerCheck(questionIndex, answer) {
    if (this.quiz[questionIndex].term.toLowerCase() === answer.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

}

export default Control
