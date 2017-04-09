"use strict"
// write your code here

class flashCardView {
  constructor() {

  }

  showErrArgv(){
    console.log(`Deck kartu yang dipilih tidak ditemukan`);
    console.log(`Pilih deck kartu : social.json atau data.json`);
  }

  showTitle(cardData) {
    console.log(`Welcome to JS Flash Cards. You're using the deck '${cardData}'\n`);
    console.log(`To Play, just enter the correct term for each definition. Ready? Go! \n`)
  }

  showListQuestion(listQuestion) {
    console.log(`Definiton`);
    console.log(`${listQuestion} \n`);
  }

  showAnswer(data){
    console.log(`Guess : ${data} `);
  }

  showTrueAnswer() {
    console.log('Correct !\n');
  }

  showWrongAnswer() {
    console.log('Incorrect! Try Again\n');
  }

  showQuitMessage(){
    console.log(`Selamat, anda telah menyelesaikan permainan ini`);
  }

  showCorrectCount(count){
    console.log(`Anda berhasil menjawab ${count} soal dengan benar \n`)
  }

  showWrongCount(count){
    console.log(`Anda telah menjawab pertanyaan ini dengan ${count} jawaban salah \n`);
  }
}

export default flashCardView
