"use strict"
// write your code here
const fs = require('fs');
class Model {
    constructor() {
        this._listData = [];


    }
    pickQuestionM(deck) {
        if (deck == 1) {
            this._listData = JSON.parse(fs.readFileSync('social.json', 'utf8'));
        } else if (deck == 2) {
            this._listData = JSON.parse(fs.readFileSync('science.json', 'utf8'));
        } else {
            this._listData = JSON.parse(fs.readFileSync('social.json', 'utf8'));
        }
        this.createBool();
    }

    createBool() {
        for (let i = 0; i < this._listData.length; i++) {
            this._listData[i]['answered'] = false
            this._listData[i]['try'] = 0
        }


    }

    checkPicked() {

        if (this._listData == '') {
            return false
        } else {
            return true
        }
    }
    skipQuestion() {
        for (var i = 0; i < this._listData.length; i++) {
            if (this._listData[i].answered === false) {
                this._listData.push(this._listData[i])
                this._listData.splice(i, 1);
                break;
            }
        }
    }


    questionM() {
        for (let i = 0; i < this._listData.length; i++) {
            if (this._listData[i].answered == false) {

                return this._listData[i];
            }
        }

        return false;
    }

    setMark(tanya) {
        for (var i = 0; i < this._listData.length; i++) {

            if (this._listData[i].definition === tanya.definition) {
                this._listData[i].answered = true;
            }
        }
    }

    setFalse(tanya) {
        for (var i = 0; i < this._listData.length; i++) {

            if (this._listData[i].definition === tanya.definition) {
                this._listData[i].try++;
                console.log('INI COY ' + this._listData[i].try)
            }
        }


    }

    checkquestionM() {
        for (var i = 0; i < this._listData.length; i++) {
            if (this._listData[i].answered === false) {
                return true;
            }
        }
        return false;

    }
}
export default Model
