"use strict"
// write your code here
import fs from 'fs'
class Model {
  constructor(dataJson) {
    this.data = dataJson || 'social.json';
  }
  getData() {
    return JSON.parse(fs.readFileSync(this.data, 'utf-8')) // return object
  }
}
export default Model