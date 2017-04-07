"use strict"
// write your code here
class Model {
    constructor() {
        this.listData = [];
        this.rl = {};
        this.fault = 0;
        this.listStatus = [];
    }
    getData() {
        const fs = require('fs');
        const readline = require('readline');
        let argv = process.argv;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        let strJson = fs.readFileSync(argv[2]);
        let str = JSON.parse(strJson);
        this.listData = str;
        for (let i = 0; i < str.length; i++) {
            this.listStatus.push("");
        }
    }
}

export default Model
