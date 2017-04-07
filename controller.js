"use strict"
// write your code here
import Model from "./model.js"
import View from "./view.js"
class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }
    start() {
        this.model.getData();
        let i = 0;
        this.ask(i);
    }
    ask(i) {
        if (i < this.model.listData.length && this.model.listStatus[i] != "DONE") {
            let strAsk = `${this.model.listData[i].definition}  \nGuess : `;
            this.model.rl.question(strAsk, (answer) => {
                if (answer.toUpperCase() == "SKIP") {
                    this.view.skip();
                    this.model.listStatus[i] = "SKIP";
                    i++;
                    this.model.fault = 0;
                    return this.ask(i);
                } else if (answer.toUpperCase() == this.model.listData[i].term) {
                    this.view.correct();
                    this.model.listStatus[i] = "DONE";
                    i++;
                    this.model.fault = 0;
                    return this.ask(i);
                } else {
                    this.model.fault += 1;
                    this.view.incorrect(this.model.fault);
                    return this.ask(i);
                }
            });
        } else {
            if (this.model.listStatus.includes("SKIP")) {
                i = 0;
                return this.ask(i);
            } else {
                this.view.finish();
                this.model.rl.close();
            }
        }
    }
}
export default Controller
