"use strict"
import View from "./view.js"
import Model from "./model.js"

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
    prompt: ""
    })

class Controller{
    constructor(input){
      this.model = new Model(input);
      this.view = new View();
      this.quiz = this.model.loadFile();
      this.currentQuiz = 0;
      this.guess = 0;
    }

tries(guess){
  console.log("Wrong Guess: " + guess)
}

init(){
rl.question("",(jawaban)=>{
  //view.displayQuestion(this.quiz[this.currentQuiz].definition);
    this.displayQuestion();
  })
}

displayQuestion(){
  this.view.displayQuestion(this.quiz[this.currentQuiz].definition);
  this.correctAnswer();
}

correctAnswer(){
  let jawabanSkip = [];
  rl.question(``,(jawaban) =>{
    let jawab = jawaban;
    let result = jawab == this.quiz[this.currentQuiz].term;
    this.view.displayCorrect(jawab,result)
    if (result === true){
      this.currentQuiz+=1
      this.tries(this.guess)
      if(this.currentQuiz <= this.quiz.length-1){
      this.displayQuestion()
    }
      else if (jawabanSkip = []) {
        this.view.menang()
        rl.close()
      }

      else {
        for (let i = 0; i < jawabanSkip.length; i++){
            this.currentQuiz[i] = jawabanSkip[i]
            this.displayQuestion();
            }
      }

      if (jawab === "skip"){
        jawabanSkip.push(this.currentQuiz)
        this.currentQuiz += 1
        this.tries(guess)
        this.displayQuestion()
      }

    } else {
      this.guess += 1
      this.tries(this.guess)
      this.displayQuestion()
        }
      })
    }

starter(){
console.log(this.quiz);
  console.log(this.view.init())
  this.view.list()
    }
  }


export default Controller
