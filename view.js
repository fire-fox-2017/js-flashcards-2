"use strict"

class View{

  static welcome(){

  }

  static pilihSoal(){
    return `Tuliskan jenis soal permainan : \n* babel-node flashcards.js bola.json\n* babel-node flashcards.js social.json`
  }

  static benarJawaban(){
    return `Jawaban anda benar\n`
  }

  static salahJawaban(){
    return `JAWABAN SALAH`
  }

  static selesai(salah){
    return `Semua Soal telah terjawab dan Total anda salah sebanyak ${salah}`
  }
}


export default View
// write your code here
