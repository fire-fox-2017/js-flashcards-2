"use strict"
module.exports = class Model{
  constructor(file){
    const fs = require('fs')
    this.file= file || 'social.json'
    this.data=JSON.parse(fs.readFileSync(this.file, 'utf8'))
  }
}
