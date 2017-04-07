"use strict"
var View = require('./view.js')
var Model = require('./model.js')
if(process.argv[2] === undefined){
  var m = new Model(process.argv[2])
} else{
  var m = new Model()
}

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Controller{
  constructor(){
    this.qna = m.data
    this.num = 0
  }
  quiz(){
    View.line()
    if(this.num<this.qna.length){
      View.definition()
      View.question(this.qna,this.num)
      this.answer(this.num)
    } else {
      View.congratulations();
      rl.close();
    }
  }
  answer(num){
    View.line()
    rl.question('Guess:', (answer) => {
      if(this.checkAnswer(num,answer)===false){
        View.incorrect()
        this.answer(num);
      } else {
        View.correct()
        this.num++;
        this.quiz();
      }
    });
  }
  checkAnswer(q,a){
      return a.toLowerCase() === this.qna[q].term.toLowerCase();
  }
}
var fc = new Controller();
if(process.argv[2] === undefined){
  View.welcome()
} else{
  View.welcomeDefined(process.argv[2])
}

fc.quiz();