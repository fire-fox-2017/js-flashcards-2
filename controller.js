"use strict"
// write your code here
import Model from "./model.js"
import View from "./view.js"

const readline = require('readline');
let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'Guess: '
});

class Controller {
  constructor() {
    this.model = new Model()
    this.view = new View
    this.data = this.model.data
    this._quest = 0;
    this._incorrect = 0;
  }
  start(){
    this.view.welcome()
    this.view.quest(this.data[this._quest].definition)
    rl.prompt();
    rl.on('line', (answer)=>{
      if(answer.toLowerCase() == 'skip'){
        this.data.push(this.data[this._quest])
        this.data.splice(this._quest,0)
        this._quest += 1;
        this.view.quest(this.data[this._quest].definition)
        rl.prompt();
      }
      else{
        if(this.data[this._quest].term.toLowerCase() == answer.toLowerCase()){
          this._quest += 1;
          if(this._quest != this.data.length){
            this.view.quest(this.data[this._quest].definition)
            rl.prompt();
          }else{
            this.view.result(this._incorrect);
            rl.close();
          }
        }else{
          this.view.wrong_answer()
          this._incorrect += 1;
          if(this.quest != this.data.length){
            this.view.quest(this.data[this._quest].definition)
            rl.prompt()
          }
        }
      }
    })
  }
}

export default Controller
