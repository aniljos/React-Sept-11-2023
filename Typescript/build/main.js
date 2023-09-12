"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//deafult import
var two_js_1 = require("./two.js");
console.log("in main.ts");
var process = function () {
    console.log("process in main.ts");
};
//invoking main.ts
process();
//invoking two.ts
two_js_1.default.process();
