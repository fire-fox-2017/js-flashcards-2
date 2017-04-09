"use strict"
// write your code here
class View {
  constructor() {

  }
  static welcome(){
    console.log(`\n***Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? GO!***\n`);
  }
   static quest(input){
    console.log(`Question: ${input}`);
  }
  static wrong_answer(){
    console.log(`\nYour Answer is Wrong\n`);
  }
  static result(input){
    console.log(`Congratulation You Win!!!\nYour answer incorrect is ${input}`);
  }
}

export default View
