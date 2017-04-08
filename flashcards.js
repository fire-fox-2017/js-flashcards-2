"use strict"
// write your code here

import Controller from "./controller"
import View from "./view"
class Flash {
  constructor(argv) {
    this.input = argv;
  }
  start() {
    if (this.input == null) {
      let view = new View();
      view.listView();
    } else {
      let controller = new Controller(this.input);
      controller.play()
    }
  }
}
let input = process.argv[2];
let card = new Flash(input);
card.start();