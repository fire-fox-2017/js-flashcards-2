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
  constructor(userInputDatabase){
    this.model = new Model(userInputDatabase);
    this.view = new View();
    this.data = this.model.database; // obj
    this.questionLeft = this.model.database.length;
    this._wrong = 0;
    this._correct = 0;
    this.questIdx = 0;
    this.isEasy = false;
  }

  welcome() {
    this.view.welcomeMsg();
    this.play();
  }

  play() {
    rl.on('line', (userInput) => {
      if(userInput === 'hint') {
        this.isEasy = true;
        this.showQuestion();
      } else if(userInput === 'start') {
        this.showQuestion();
      } else if(userInput === 'skip') {
        this.skip();
      }
      if(this.data[this.questIdx].term.toLowerCase() === userInput.toLowerCase()) {
        this.correct(userInput);
      } else if(this.data[this.questIdx].term.toLowerCase() !== userInput.toLowerCase() && userInput.toLowerCase() !== 'start' && userInput.toLowerCase() !== 'hint' && userInput.toLowerCase() !== 'skip') { //jangan proses hint, skip dan start karena command
        this.wrong(userInput);
      }

    }).on('close', () => {
      if(this.questionLeft < 1) {
        let numOfCorrect = this._correct;
        let numOfWrong = this._wrong;
        this.view.winMsg(numOfCorrect, numOfWrong);
        process.exit(0);
      } else {
        console.log(`Dadah! Sampai ketemu lagi!`);
      }
    });;

      
    }

  correct(userInput, correctCounter) {
    correctCounter = this._correct += 1;
    this.questIdx++;
    this.questionLeft--;
    this.view.correctMsg(userInput, correctCounter);
    if(this.questionLeft < 1)
      rl.close();
    this.showQuestion();
  }

  wrong(userInput, wrongCounter) {
    wrongCounter = this._wrong += 1;
    this._correct--;
    this.view.wrongMsg(userInput, wrongCounter);
    this.showQuestion();
  }

  skip(database = this.data) {
    this.data.push(this.data[this.questIdx]);
    this.questIdx += 1;
    this.view.skipMsg();
    this.showQuestion();
  }
  
  showQuestion(database = this.data) {
    let questIdx = this.questIdx;
    if(this.isEasy) {
      this.view.questionMsgEasy(database, questIdx)
    } else {
      this.view.questionMsg(database, questIdx);
    }
    
  }

}

// let control = new Controller();
// control.welcome();

export default Controller