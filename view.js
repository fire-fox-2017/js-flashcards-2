"use strict"
module.exports = class View{
  static welcome(){
    console.log('Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!')
  }
  static welcomeDefined(file){
    console.log(`Welcome to JS Flash Cards. You're using the deck ${file}. \nTo play, just enter the correct term for each definition. Ready? Go!`)
  }
  static question(m) {
    console.log(m[0].definition)
  }
  static line(){
    console.log('')
  }
  static definition(){
    console.log('Definition')
  }
  static congratulations(){
    console.log("Congratulations!")
  }
  static incorrect(num){
    if(num === 1){
      console.log("Incorrect! Try again.")
    } else {
      console.log(`You have been incorrect for ${num} times, try again or type 'skip' to skip`)
    }
  }
  static correct(){
    console.log("Correct!")
  }
}