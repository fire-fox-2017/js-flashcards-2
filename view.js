"use strict"
// write your code here
import Controller from "./controller"
class View {
  trueAnswer() {
    console.log("Great, your answer is true !\n")
  }
  falseAnswer(answer, falseCount) {
    console.log(`You ${answer} answer is wrong, was wrong ${falseCount} times\n`)
  }
  question(data) {
    console.log(data)
  }
  win() {
    console.log('Congratulations you win !');
  }
  welcome(card) {
    console.log("--------------------------------")
    console.log(`Welcome Game Flashcard ${card}`)
    console.log("--------------------------------")
  }
  listView() {
    console.log(`-- babel-node flashcard.js social.json`)
    console.log(`-- babel-node flashcard.js math.json`)
  }
}

export default View