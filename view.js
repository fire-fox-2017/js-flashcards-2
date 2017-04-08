"use strict"
// write your code here

class View {
  constructor() {

  }

  welcomeMsg() {
    console.log(`======Welcome to JS Flashcards 2======\n======ketik 'hint' untuk easy mode====\n======atau 'start' untuk mulai========`);
  }

  winMsg() {

  }

  correctMsg(userInput) {
    console.log(`Jawaban '${userInput}' benar. next question`)
  }

  wrongMsg(userInput) {
    console.log(`Jawaban '${userInput}' salah. coba lagi`)
  }

  skipMsg() {

  }

  questionMsgEasy(database, questIdx) {
    console.log(`${database[questIdx].definition} | first letter: ${database[questIdx].term.charAt(0)}`);
  }

  questionMsg(database, questIdx) {
    console.log(`${database[questIdx].definition}`);
  }
}

export default View;