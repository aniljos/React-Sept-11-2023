"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var one_js_1 = require("./one.js");
console.log("in two.ts");
function process() {
    console.log("process in two.ts");
    (0, one_js_1.calcAdd)(3, 4);
}
function process1() {
    console.log("process in two.ts");
    (0, one_js_1.calcAdd)(3, 4);
}
exports.default = {
    process: process,
    process1: process1
};
