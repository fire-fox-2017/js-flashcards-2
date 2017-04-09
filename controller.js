"use strict"
// write your code here
import flashCardModel from './model.js';
import flashCardView from './view.js';

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



class flashCardController {
  constructor() {
    this._view = new flashCardView();
    this._model = new flashCardModel();
    this._numQuestion = 0;
    this._wrongAnswer = 0;
    this._argv = process.argv;
  }

  chooseCard(){
    let inputArgv = this._argv;
    inputArgv.shift();
    inputArgv.shift();
    // let kartu = inputArgv.toString();

    if(inputArgv.length > 0){
      var cekData = this._model.getCekData(inputArgv[0]);
      var deckKartu = inputArgv[0].toString();

      if(cekData == true){
        this.startFlashCard(deckKartu);
      } else {
        this._view.showErrArgv();
        rl.close();
      }
    } else {
      var defaultCard = 'social.json';
      this._model.setListQuestion(defaultCard);
      this.startFlashCard(defaultCard);
    }
  }

  startFlashCard(cardData) {
    this._view.showTitle(cardData);
    rl.question(``, (data) => {
      this.listQuestion();
    });


  }

  listQuestion() {
    var listQuestion = this._model.getListQuestion();
    this._view.showListQuestion(listQuestion[this._numQuestion].definition);
    this.inputAnswer();
  }

  inputAnswer() {
    rl.question(``, (dataAnswer) => {
      this.checkAnswer(dataAnswer);
    });
    // console.log('a');
  }

  checkAnswer(dataAnswer) {
    // console.log(dataAnswer);
    // console.log(cardData);
    var listQuestion = this._model.getListQuestion();

    if(dataAnswer === 'skip'){
        var definition = this._model.getDefiniton(this._numQuestion);
        listQuestion.push(definition);
        this._model.insertDefinition(listQuestion);
        this._numQuestion++;
        // console.log(this._numQuestion);
        // console.log(listQuestion.length -1);
        this.listQuestion();
    } else {
      this._view.showAnswer(dataAnswer);
      var answer = this._model.getAnswer(dataAnswer, this._numQuestion);
      // console.log(answer);

      if(this._numQuestion < listQuestion.length - 1){
        if(answer == true){
          this._view.showTrueAnswer();
          this._numQuestion++;
          this._wrongAnswer = 0;
          // console.log(this._numQuestion);
          // console.log(listQuestion.length -1);
          this.listQuestion();
        } else {
          this._view.showWrongAnswer();
          this._wrongAnswer++;
          this._view.showWrongCount(this._wrongAnswer);
          this.listQuestion();
        }
      } else {
        this._view.showQuitMessage();
        rl.close();
      }
    }




  }

}

export default flashCardController
