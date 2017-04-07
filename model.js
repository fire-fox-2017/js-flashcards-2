"use strict"
// write your code here


class Model {

  loadJsonFile(file) {
    // console.log("rudy");
    var fs = require('fs');

    let data = fs.readFileSync(file)
      .toString();

    // let data = null;
    // fs.readFile(file, (err, d) => {
    //   if(err)
    //     return console.error(err);
    //   console.log(`"$file" is read successfully.`);
    //   console.log(d);
    //   data = d;
    // });

    // console.log(data);
    let json_data = JSON.parse(data);
    console.log(json_data);
    // console.log(json_data[0]);
    return json_data;
  }
}


// module.exports = {
//   Model
// }
// export default Model;
module.exports = Model;
