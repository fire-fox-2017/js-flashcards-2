"use strict"
// write your code here

class Model {
  constructor(){
    const fs = require('fs')
    this.file= process.argv[2] || 'social.json'
    this.data=JSON.parse(fs.readFileSync(this.file, 'utf8'))
  }
}

export default Model
