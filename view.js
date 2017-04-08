"use strict"
// write your code here

class View {
  constructor() {

  }

  welcomeMsg() {
    console.log(`======Welcome to JS Flashcards 2======\n======ketik 'hint' untuk easy mode====\n======atau 'start' untuk mulai========`);
  }

  winMsg(correct, wrong) {
    console.log(`Selamat! Total skor: ${correct} benar, ${wrong} salah`)
  }

  correctMsg(userInput, correctCounter) {
    console.log(`Jawaban '${userInput}' benar. next question. skor: ${correctCounter}`)
  }

  wrongMsg(userInput, wrongCounter) {
    console.log(`Jawaban '${userInput}' salah. coba lagi. Kamu ${wrongCounter} kali salah`)
  }

  skipMsg() {
    console.log(`Question dilewati.`)
  }

  questionMsgEasy(database, questIdx) {
    console.log(`${database[questIdx].definition} | first letter: ${database[questIdx].term.charAt(0)}`);
  }

  questionMsg(database, questIdx) {
    console.log(`${database[questIdx].definition}`);
  }
}

export default View;