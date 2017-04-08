"use strict"
// write your code here
import Model from './model';
import View from './view';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Guess '
});

class Controller {
  constructor(){
    this.model = new Model();
    this.view = new View();
    this.data = this.model.getData(); // obj
    this.wrong = 0;
    this.correct = 0;
    this.questIdx = 0;
  }

  welcome() {
    this.view.welcomeMsg();
    rl.on('line', (userInput) => {
      if(userInput === 'hint') {
        rl.close();
        this.play(this.easyMode());
      } else {
        this.play();
      }
    });
  }

  easyMode() {
    return 'easy';
  }

  play(isEasy = 'normal') {
    if(isEasy === 'easy') {
      rl.on('line', (userInput) => {
      if(this.data[questIdx].term.toLowerCase() === userInput.toLowerCase()) {
        this.correct();
      }
    });
    }
    
  }

  correct() {
    this.correct++;
    this.questIdx++;
    this.view.correctMsg(userInput);
  }

  wrong() {

  }

  skip() {

  }
  
  showQuestion() {

  }

}

export default Controller;