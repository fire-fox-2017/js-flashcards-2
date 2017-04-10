"use strict"
// write your code here

import Model from './model'
import View from './view'
const readline = require('readline');

class Controller{
    constructor(file){
      this.soal = Model.readFile(file);  // membaca file dan convert ke JSON dari class MODEL
      this.indekSoal = 0;
      this._salah = 0;
    }

    play(){
      const rl = readline.createInterface(
        {
          input: process.stdin,
          output: process.stdout,
          prompt: this.soal[this.indekSoal].definition+'\n'
        });

        rl.prompt();

        rl.on('line', (answer) => {
          if(answer.toLowerCase() == 'skip'){
            this.soal.push(this.soal[this.indekSoal])
            this.indekSoal++
            rl.setPrompt(this.soal[this.indekSoal].definition+'\n')
            rl.prompt();
          }


          else if(answer.toLowerCase() == this.soal[this.indekSoal].term.toLowerCase()){
            console.log(View.benarJawaban());
            this.indekSoal++;
            if(this.indekSoal>=this.soal.length){
              console.log(View.selesai(this._salah));
              rl.close();
            }
            else{
              rl.setPrompt(this.soal[this.indekSoal].definition+'\n')
              rl.prompt();
            }
          }
          else{
            this._salah++;
            console.log(View.salahJawaban());
            rl.prompt();
          }
        });
    }
}


export default Controller
