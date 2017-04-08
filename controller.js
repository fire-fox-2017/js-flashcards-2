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
    this.questionLeft = this.model.database.length;
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
      }
      if(this.data[this.questIdx].term.toLowerCase() === userInput.toLowerCase()) {
        this.correct(userInput);
      } else if(this.data[this.questIdx].term.toLowerCase() !== userInput.toLowerCase() && userInput.toLowerCase() !== 'start' && userInput.toLowerCase() !== 'hint') { //jangan proses hint dan start karena command
        this.wrong(userInput);
      }

    }).on('close', () => {
      if(this.questionLeft < 1) {
        console.log(`Selamat! Total skor: ${this._correct} benar, ${this._wrong} salah`);
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

  skip() {

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

let control = new Controller();
control.welcome();

export default Controller