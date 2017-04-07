"use strict"
// write your code here
const fs = require('fs')
const readline = require('readline')
let userChoice = process.argv

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "masukan jawaban :"
})

class Model {
  constructor(){
    this.userChoice = userChoice[2] || 'social.json'
    this.data = JSON.parse(fs.readFileSync(this.userChoice, 'UTF-8'))
  }
}
class View {
  constructor(){}

  jumlahPercobaan(percobaan) {
    console.log(`anda berhasil menjawab seluruh pertanyaan dengan ${percobaan} kali percobaan`);
  }

  welcome(deck) {
    console.log(`===================================================================\nwelcome to js flash cards. you're using the deck "${deck}"\n===================================================================\n\nto play, just enter the correct term for each definition. ready? go!\n\n\n\n\n--------------------------------------------------------------------`);
  }

  question(question, nomor){
    console.log(`===================================================================\n${question[nomor].definition}\n===================================================================\n`);
  }
  userInput(input) {
    console.log(`jawaban anda : ${input}`);
  }
  jawabanBenar() {
    console.log(`jawaban anda benar`);
  }
  jawabanSalah() {
    console.log(`jawaban anda salah.. silahkan coba lagi.`);
  }
  selesai() {
    console.log(`terimakasih sudah bermain :D`);
  }
  clean() {
    console.log("\x1B[2J")
  }
}
class Controler {
  constructor(input) {
    this.input = input
    this.question = new Model().data
    this.file = new Model().userChoice
    this.view = new View()
    this.nomor = 0
    this.percobaan = 0
    this.skipQuestion = []
  }

  welcome() {
    this.view.clean()
    this.view.welcome(this.file)
    rl.setPrompt(`press enter to play`)
    rl.prompt()
    rl.on('line', (input) => {
      if (!input) {
        this.view.clean()
        this.start()
      }
    })
  }

  start() {
    let view = this.view
    // rl.setPrompt(`${this.question[this.nomor].definition}`)
    view.question(this.question, this.nomor)
    rl.setPrompt(`masukan jawaban : `)
    rl.prompt()

    rl.on('line', input => {
      view.userInput(input)
      if (input.toLowerCase() == this.question[this.nomor].term.toLowerCase()) {
        view.jawabanBenar()
        this.nomor++
        this.percobaan++

        if (this.nomor < this.question.length) {
          // rl.setPrompt(`${this.question[this.nomor].definition}`)
          view.clean()
          view.question(this.question, this.nomor)
          rl.prompt()
        } else {
          // console.log("===========",this.skipQuestion);
          // if(!this.skipQuestion.length) {
            view.clean()
            view.jumlahPercobaan(this.percobaan)
            view.selesai()
            rl.close()
          // } else {
          //   console.log(this.question);
          // }
        }
      }
      else if (input.toLowerCase() == "skip") {
        this.skipQuestion.push(this.question[this.nomor])
        this.nomor++

        if (this.nomor < this.question.length){
          view.clean()
          view.question(this.question, this.nomor)
          rl.prompt()
        } else {
          this.nomor = 0
          this.question = this.skipQuestion
        }
      }
      else {
        view.jawabanSalah()
        if (this.nomor < this.question.length) {
          // rl.setPrompt(`${this.question[this.nomor].definition}`)
          this.percobaan++
          view.clean()
          view.question(this.question, this.nomor)
          rl.prompt()
        }
      }
    })
  }
}
let game = new Controler()
game.welcome()
