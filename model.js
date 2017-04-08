"use strict"
// write your code here

import View from "./view.js"
import Control from "./controller.js"

class Data {
  constructor(file) {
    this.data = this.loadFile(file);
  }

  loadFile(file) {
    const fs = require("fs");
    return JSON.parse(fs.readFileSync(file));
  }

}

export default Data
