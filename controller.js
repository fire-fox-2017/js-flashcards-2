"use strict"
// write your code here

import CardModel from "./model.js"
import CardView from "./view.js"

class CardController {
    constructor() {
        this._argv = process.argv
        this._cardModel = new CardModel(this.chooseFile())
        this._file = this._cardModel._data
        this._cardView = new CardView()
        this._readline = require("readline");
        this._rl = this._readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Guess: "
        })
    }

    chooseFile() {
        if (this._argv.length > 2) {
            if (this._argv[2]) {
                return this._argv[2]
            }
        } else {
            this._cardView.messageInputFileErr()
            process.exit()
        }
    }

    result() {
        this._cardView.messageWelcome()
        this.startAnswer()
    }

    startAnswer(indexQues = 0, wrongAnswer = 0) {
        if (indexQues < this._file.length) {
            this._cardView.displayQuestion(this._file[indexQues].definition)
            this._rl.prompt()

            if (indexQues > this._file.length) {
                if (wrongAnswer !== 0) {
                    wrongAnswer = 0
                }
            }

            this._rl.question('Guess :', (answer) => {
                if (this.cekAnswer(indexQues, answer)) {
                    indexQues++
                    wrongAnswer = 0
                    this._cardView.messageCorrect()
                    this.startAnswer(indexQues, wrongAnswer)
                } else if (answer == 'skip') {
                    let skipQues = this._file[indexQues]
                    this._file.push(skipQues)
                    indexQues++
                    this.startAnswer(indexQues, wrongAnswer)
                } else {
                    wrongAnswer++
                    this._cardView.messageIncorrect(wrongAnswer)
                    this.startAnswer(indexQues, wrongAnswer)
                }
            })
        } else {
            this._cardView.messageWinner()
            process.exit()
        }
    }

    cekAnswer(indexQues, answer) {
        if (this._file[indexQues].term.toLowerCase() === answer.toLowerCase()) {
            return true
        } else {
            return false
        }
    }
}

export default CardController