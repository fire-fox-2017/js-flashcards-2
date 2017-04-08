"use strict"
// write your code here
import Model from './model'
import View from './view'
const readline = require('readline');
//const patt = /\s/g

class Controller {
  constructor(card) {
    this.card = card;
    this.model = new Model(card);
    this.data = this.model.getData();
    // console.log(this.data)
    this.view = new View();
    this.next = 0;
    this.falseCount = 0;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'Guess: '
    });
  }
  welcome() {
    this.view.welcome(this.card);
  }
  skip() {
    this.data.push(this.data[this.next]) // push soal skip
    this.next++
      this.view.question(this.data[this.next].definition) // menambahkan 1 soal yg blm dijawab
  }
  list() {
    this.view.listView();
    process.exit(0);
  }
  trueAnswers() {
    // this.rl.prompt()
    this.view.trueAnswer();
    this.next++
      this.falseCount = 0; // reset jumlah salah
  }
  falseAnswers(answer, falseCount) {
    this.falseCount++
      this.view.falseAnswer(answer, falseCount);
  }
  exit() {
    this.view.win();
    process.exit(0);
  }
  play() {
    this.welcome(this.card);
    console.log(this.data[this.next].definition) // first question
    this.rl.prompt();
    this.rl.on('line', (line) => {
      if (line == "skip") {
        this.skip();
        this.rl.prompt();
      } else {
        if (this.next < this.data.length - 1) {
          if (line.toLowerCase() == this.data[this.next].term.toLowerCase()) { // cek answer
            this.trueAnswers()
          } else {
            this.falseAnswers(line, this.falseCount)
          }
          this.view.question(this.data[this.next].definition)
          this.rl.prompt();
        } else {
          this.rl.close()
        }
      }
    }).on('close', () => {
      this.exit()
    });
  }
}
export default Controller