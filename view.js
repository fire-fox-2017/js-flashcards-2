"use strict"
// write your code here
class View{
  constructor(){
    this._rl="";
  }

  get rl()
  {
    return this._rl;
  }

  tampilPertanyaan(list){
    const readline = require('readline');
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: `${list["definition"]} `
    });
    console.log("\n\n***********-SELAMAT BERMAIN FLASHCARDS-***********\n")
     this._rl.prompt();
   }

   tampilPertanyaanLanjutan(list){
     this._rl.setPrompt(`\n${list["definition"]} `);
     this._rl.prompt();
   }

   tampilPesanSelesai()
   {
     console.log("\n\n***********-SELAMAT ANDA TELAH MENYELESAIKAN PERMAINAN-***********\n\n");
   }

   tampilPesanMyDeck(deck)
   {
     console.log(`\n\nWelcome to JS Flash Cards. You'are using the deck '${deck}'`);
     console.log(`\nTo play, just enter the correct trerm fir each definition. Ready? Go!\n\n`);
   }

   tampilPesanDefault()
   {
     console.log(`\n\nWelcome to JS Flash Cards. You'are using the default deck`)
     console.log(`\nTo play, just enter the correct trerm fir each definition. Ready? Go!\n\n`);
   }

}

export default View
