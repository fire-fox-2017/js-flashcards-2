"use strict"
import Controller from "./controller.js"

const fs = require("fs")



class Model{
    constructor(input){
      this.file = JSON.parse(fs.readFileSync(input,"utf-8"))
    }

loadFile(){
    return this.file;
  }
}

export default Model
