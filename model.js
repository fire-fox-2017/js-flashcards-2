"use strict"
// write your code here

const fs = require('fs');

class Model {
  constructor(database = 'social.json') {
    this.database = JSON.parse(fs.readFileSync(database, 'utf-8'));
  }

}

export default Model