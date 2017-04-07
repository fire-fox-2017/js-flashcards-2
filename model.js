"use strict"
// write your code here


class Model {

  loadJsonFile(file) {
    // console.log("rudy");
    var fs = require('fs');

    let data = fs.readFileSync(file)
      .toString();

    // console.log(data);
    let json_data = JSON.parse(data);
    // console.log(json_data);
    // console.log(json_data[0]);
    return json_data;
  }
}


// module.exports = {
//   Model
// }
// export default Model;
module.exports = Model;
