"use strict"
// write your code here

const fs = require('fs');

class Model {
  constructor(database) {
    this.database = database || 'social.json';
  }

  getData() {
    return JSON.parse(fs.readFileSync(this.data, 'utf-8'));
  }

}

export default Model;