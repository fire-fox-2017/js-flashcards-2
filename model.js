"use strict"
// write your code here
const fs = require('fs')

class Model{
  static readFile(file){
    return JSON.parse(fs.readFileSync(file, 'utf-8'))
  }
}
export default Model