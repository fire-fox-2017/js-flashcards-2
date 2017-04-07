"use strict"
// write your code here
import Controller from "./controller.js"
class Flashcards {
    constructor() {
        this.controller = new Controller();
    }
    run() {
        this.controller.start();
    }
}

let myFlashcards = new Flashcards();
myFlashcards.run();
