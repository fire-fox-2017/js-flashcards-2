"use strict"
var View = require('./view.js')
var Model = require('./model.js')
if(process.argv[2] === undefined){
  var m = new Model()
} else{
  var m = new Model(process.argv[2])
}

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Controller{
  constructor(){
    this.qna = m.data
    this.incorrect = 0
  }
  quiz(){
    View.line()
    if(0<this.qna.length){
      View.definition()
      View.question(this.qna)
      this.answer()
    } else {
      View.congratulations();
      rl.close();
    }
  }
  answer(){
    View.line()
    rl.question('Guess:', (answer) => {
      if(answer === "skip"){
        let a=this.qna.shift()
        this.qna.push(a)
        this.incorrect = 0
        this.quiz();
      } else if(this.checkAnswer(answer)===false){
        this.incorrect += 1;
        View.incorrect(this.incorrect)
        this.answer(0);
      } else {
        View.correct()
        this.qna.shift();
        this.incorrect = 0
        this.quiz();
      }
    });
  }
  checkAnswer(a){
      return a.toLowerCase() === this.qna[0].term.toLowerCase();
  }
}

if(process.argv[2] === undefined){
  View.welcome()
  var fc = new Controller();
} else{
  View.welcomeDefined(process.argv[2])
  var fc = new Controller();
}

fc.quiz();