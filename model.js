"use strict"
// write your code here
const fs = require('fs');

class flashCardModel {
  constructor() {
    this._data= '';
    this._deckKartu = '';
  }

  setListQuestion(cardData) {
    this._data = JSON.parse(fs.readFileSync(cardData, 'utf8'));
    this._deckKartu = cardData;
  }

  getListQuestion(){
    return this._data;
  }

  getAnswer(dataAnswer, indeks) {
    var tmpAnswer = dataAnswer.toLowerCase();
    var realAnswer = this._data[indeks].term.toLowerCase();
    if(tmpAnswer === realAnswer){
      return true;
    } else {
      return false;
    }

  }

  getCekData(data){
    if(fs.existsSync(data)){
      return true;
    } else {
      return false;
    }
  }

  getDefiniton(indeks){
    return this._data[indeks];
  }

  insertDefinition(definition){
      fs.writeFile(this._deckKartu, JSON.stringify(definition), function (err) {
          if (err) return console.log(err);
      });

  }
}

export default flashCardModel
