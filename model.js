"use strict"
// write your code here
const fs = require("fs")

import CardView from "./view.js"
import CardController from "./controller.js"

class CardModel {
    constructor(inputFile) {
        this._inputFile = inputFile
        this._data = this.getAllData()
    }

    getAllData() {
        let data = JSON.parse(fs.readFileSync(this._inputFile))
        return data
    }
}

export default CardModel
