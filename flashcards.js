"use strict"
// write your code here

import Controller from './controller';
import Model from './model';

class Flashcards {
  constructor() {
    this.argv = process.argv[2];
    this.controller = new Controller(this.argv);
  }
}

let flashcards = new Flashcards();
flashcards.controller.welcome();

export default Flashcards