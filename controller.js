"use strict"
// write your code here

import Model from "./model.js"
import View from "./view.js"

class Controller {
    constructor() {
        this._model = new Model();
        this._view = new View();


    }

    pickQuestionC() {
        this._view.pickQuestionV();


    }

    isPicked() {
        return this._model.checkPicked()

    }

    skip() {
        this._model.skipQuestion();
    }



    welcomeC(deck) {
        this._model.pickQuestionM(deck);
        this._view.welcomeV(deck);

    }

    checkquestionC() {
        return this._model.checkquestionM()

    }

    questionC() {

        let tanya = this._model.questionM();

        if (tanya == false) {
            this._view.endV();

        } else {
            this._view.questionV(tanya.definition, tanya.try);
        }
    }

    answerC(string) {

        let tanya = this._model.questionM();
        if (tanya.term.toUpperCase() == string.toUpperCase()) {
            this._view.answerV(true);
            this._model.setMark(tanya);

        } else {
            this._view.answerV(false);
            this._model.setFalse(tanya);

        }

    }
    checkquestionC() {
        return this._model.checkquestionM();
    }

    static init() {

        let app = new Controller;
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: '> '
        });





        app.pickQuestionC();
        rl.prompt();

        rl.on('line', (line) => {
            line.trim()

            if (app.isPicked() == false) {

                app.welcomeC(line);
                app.questionC();

            } else if (app.checkquestionC() == true) {

                if (line == 'skip') {
                    app.skip();
                } else {
                    app.answerC(line);
                }

                app.questionC();
                rl.prompt();
            } else {

                rl.close();
            }


        }).on('close', () => {
            console.log('bye bye!');
            process.exit(0);
        });


    }
}

export default Controller
