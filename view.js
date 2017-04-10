"use strict"
// write your code here

import CardModel from "./model.js"
import CardController from "./controller.js"

class CardView {
    constructor() {

    }

    messageWelcome() {
        console.log('Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!\n')
    }

    displayQuestion(question) {
        console.log(`Definition \n${question}\n`);
    }

    messageCorrect() {
        console.log('Correct!\n');
    }

    messageWinner() {
        console.log('Congrats!');
    }

    messageIncorrect(wrongAnswer) {
        console.log(`Incorrect!\n There is ${wrongAnswer} wrong answer.`);
    }

    messageInputFileErr() {
        console.log(`Please input the name of the file!`);
    }
}

export default CardView