"use strict"
// write your code here

import Data from "./model.js"
import Control from "./controller.js"

class View {
  constructor() {

  }

  requireFileArgv() {
    console.log("Enter 'babel-node flashcards.js <json_file>' to start playing.");
  }

  welcome() {
    console.log("Welcome to JS Flash Cards. \nTo Play, just enter the correct term or each definition. Ready? Go!\n");
  }

  showQuestion(question) {
    console.log("Definition: ");
    console.log(question + "\n");
  }

  correct() {
    console.log("Correct!\n");
  }

  incorrect(falseCount) {
    console.log(`Incorrect! False count: ${falseCount}, Try Again.\n`);
  }

}








export default View
