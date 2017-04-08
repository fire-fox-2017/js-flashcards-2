"use strict"
// write your code here

import Controller from './controller'
import View from './view'


class Flashcard{
  static mulai(input){
    if(input.length<=2){
      console.log(View.pilihSoal());
    }
    else{
      let controller = new Controller(input[2]);
      controller.play();
    }
  }
}


let input = process.argv
Flashcard.mulai(input);
