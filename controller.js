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
    this.data = this.model.database; // obj
    this._wrong = 0;
    this._correct = 0;
    this.questIdx = 0;
  }

  welcome() {
    this.view.welcomeMsg();
    rl.on('line', (userInput) => {
      if(userInput === 'hint') {
        // rl.close();
        this.play(this.easyMode());
      } else {
        rl.close();
        this.play();
      }
    });
  }

  easyMode() {
    return 'easy';
  }

  play(isEasy = 'normal') {
    if(isEasy === 'easy') {
      this.showQuestion('easy');
      rl.on('line', (userInput) => {
      if(this.data[this.questIdx].term.toLowerCase() === userInput.toLowerCase()) {
        this.correct(userInput);
      }
    });
    } else {
      rl.on('line', (userInput) => {
        
      })
    }
    
  }

  correct(userInput) {
    this.correct++;
    this.questIdx++;
    this.view.correctMsg(userInput);
    this.showQuestion();
  }

  wrong() {

  }

  skip() {

  }
  
  showQuestion(mode, database = this.data) {
    let questIdx = this.questIdx;
    if(mode === 'easy') {
      this.view.questionMsgEasy(database, questIdx)
    } else {
      this.view.questionMsg(database, questIdx);
    }
    
  }

}

let control = new Controller();
control.welcome();

export default Controller