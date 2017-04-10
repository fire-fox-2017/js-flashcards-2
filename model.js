"use strict"
// write your code here
class Model{
  constructor(){
    this._list=[];
  }

  get list()
  {
    var fs = require('fs');
    var str = fs.readFileSync('data.json');
    var list = JSON.parse(str);
    this._list=list;
    return this._list;
  }
  get list2()
  {
    var fs = require('fs');
    var str = fs.readFileSync('social.json');
    var list = JSON.parse(str);
    this._list=list;
    return this._list;
  }
}

export default Model
