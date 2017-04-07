"use strict"
import Controller from "./controller"

class View{
    constructor(){
    }

init(){
    return "Welcome to JS Flash Cards. To play, please type node js-flashcards-2 <Quiz_Number> to begin"
  }

list(){
  console.log("- node js-flashcards-2 Quiz_1 ---- Difficulity = Easy")
  console.log("- node js-flashcards-2 Quiz_2 ---- Difficulity = Medium")
  console.log("- node js-flashcards-2 Quiz_1 ---- Difficulity = Hard")
}

displayCorrect(answer,result){
  console.log(`Guess: ${answer}`)
  if (result === true){
        console.log("Correct!")}
  else {
  console.log("Incorrect! Try again.")}
}

displayQuestion(question){
  console.log(question);
  }


menang(){
  console.log("Congratulation You Win!!");
  }
}

export default View
