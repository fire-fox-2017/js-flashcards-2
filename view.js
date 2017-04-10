"use strict"
// write your code here

class View {
    constructor() {

    }

    welcomeV(deck) {
        console.log(`welcome to JS Flash Cards. Your're using the deck ${deck} \nTo play, just enter the corrent term for each definition. Ready? Go!`);

    }
    questionV(def, tried) {
        console.log(`${def} | False : ${tried}`);
    }

    answerV(bool) {
        if (bool == true) {
            console.log(`Correct!`);

        } else {
            console.log(`Incorrect! Try again.`);

        }

    }
    endV() {
        console.log(`Pertanyaan sudah habis, terima kasih sudah bermain`)

    }

    pickQuestionV() {
        console.log(`choose your deck :`);
        console.log(`1. social `);
        console.log(`2. science `);
        console.log(`else : default : social`);

    }


}

export default View
