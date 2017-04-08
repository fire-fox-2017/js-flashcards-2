"use strict"
// write your code here
import Model from './model';
import View from './view';

const rl = require('readline');

class Controller {
  constructor(){
    this.model = new Model();
    this.view = new View();
  }
}

export default Controller;