"use strict"
// write your code here
import Model from "./model.js"
import View from "./view.js"

class Controller{
  constructor(){
    this._model = new Model();
    this._view = new View();
    this._argv =[];
  }

  argvProcess(){
    var arrPerintah=[];
    process.argv.forEach((val, index) => {
      let hasil=[];
      if(index>1)
      {
        arrPerintah.push(val)
      }
    });
     this._argv=arrPerintah;
  }

  pilihDeck()
  {
    if(this._argv[0]=="my_cards.json")
    {
      this.inputProcessMyCards();
    }
    // else if(this._argv.length===0){
    //   console.log("Perintah salah")
    // }
    else {
      this.inputProcessDefault();
    }
  }

  inputProcessDefault()
  {
    let list = this._model.list2;
    let benar=0;
    let i=0,tebak=1;
    this._view.tampilPertanyaan(list[i]);
    this._view.rl.on('line', (input) => {
      if(input.toLowerCase()=== list[i]["term"].toLowerCase()){
          list.shift();
          if(list.length>i){
            this._view.tampilPertanyaanLanjutan(list[i]);
            tebak=1;
          }else this._view.rl.close();
      }
      else if(input.toLowerCase()=== "skip"){
        let last=list.shift();
        list.push(last);
        this._view.tampilPertanyaanLanjutan(list[i]);
      }
      else {
        console.log(`\n\nMenebak: ${tebak}\n`);
        this._view.tampilPertanyaanLanjutan(list[i]);
        tebak+=1;
      }
    }).on('close', () => {
      this._view.tampilPesanSelesai();
    });
  }

  inputProcessMyCards()
  {
    let list = this._model.list;
    let benar=0;
    let i=0,tebak=1;
    this._view.tampilPertanyaan(list[i]);
    this._view.rl.on('line', (input) => {
      if(input.toLowerCase()=== list[i]["term"].toLowerCase()){
          list.shift();
          if(list.length>i){
            this._view.tampilPertanyaanLanjutan(list[i]);
            tebak=1;
          }else this._view.rl.close();
      }
      else if(input.toLowerCase()=== "skip"){
        let last=list.shift();
        list.push(last);
        this._view.tampilPertanyaanLanjutan(list[i]);
      }
      else {
        console.log(`\n\nMenebak: ${tebak}\n`);
        this._view.tampilPertanyaanLanjutan(list[i]);
        tebak+=1;
      }
    }).on('close', () => {
      this._view.tampilPesanSelesai();
    });
  }
}

export default Controller
