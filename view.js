"use strict"
module.exports = class View{
  static welcome(){
    console.log('Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!')
  }
  static welcomeDefined(file){
    console.log(`Welcome to JS Flash Cards. You're using the deck ${file}. \nTo play, just enter the correct term for each definition. Ready? Go!`)
  }
  static question(m,q) {
    console.log(m[q].definition)
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
  static incorrect(){
    console.log("Incorrect! Try again.")
  }
  static correct(){
    console.log("Correct!")
  }
}