"use strict"

import Controller from "./controller.js"

let argv = process.argv;
let game = new Controller(argv[2]);
// game.starter();
// game.init()
console.log(game.quiz)

// if(argv[2] === "Quiz_1"){
//   game.init()
// }
// let game = new Controller();
