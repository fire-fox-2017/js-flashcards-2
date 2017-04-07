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
    this.falseCount = {};
    this.answered = {};
  }

  loadFile() {
    const argv = process.argv;
    if (argv.length > 2) {
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

    if (!this.answered.hasOwnProperty(index)) {
      this.answered[index] = false;
    }

    console.log(this.answered);

    // index = this.answeredQuestCheck();
    console.log(this.answeredQuestCheck());

    if (this.falseCount.hasOwnProperty(index)) {
      this.falseCount[index] ++;
    } else {
      this.falseCount[index] = 0;
    }

    if (quizIndex < this.quiz.length && !this.answeredQuestCheck()) {
      this.showQuestion(index);
      rl.prompt();
      rl.question("Guess: ", (guess) => {
        if (this.answerCheck(index, guess)) {
          this.answered[index] = true;
          this.view.correct();
          index ++;
          this.flashing(index);
        } else if (guess === "skip") {
          index ++;
          this.flashing(index);
        } else {
          this.view.incorrect(this.falseCount[index] + 1);
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

  answeredQuestCheck() {
    let unanswered = 0;
    for (let i = 0; i < this.answered.length; i++) {
      if (this.answered[i] === false) {
        unanswered ++;
      }
    }
    return unanswered;
  }

}

export default Control
