"use strict"
// write your code here

class View {
  constructor() {

  }

  welcomeMsg() {
    console.log(`======Welcome to JS Flashcards 2======\n======ketik 'hint' untuk easy mode======`);
  }

  winMsg() {

  }

  correctMsg(userInput) {
    console.log(`Jawaban '${userInput}' benar. next question`)
  }

  wrongMsg() {

  }

  skipMsg() {

  }
}

export default View;