"use strict"
// write your code here
class View {
    constructor() {}
    skip() {
        console.log(`Skip OK! \n`);
    }
    correct() {
        console.log(`Correct! \n`);
    }
    incorrect(i) {
        console.log(`Incorrect! Try again.`);
        console.log(`Kesalahan anda ${i}\n`);
    }
    finish() {
        console.log("Congrulation Task Complete");
    }
}

export default View
