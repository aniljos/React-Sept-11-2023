"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.calcMultiply = exports.calcAdd = void 0;
console.log("in one.ts");
//named export
function calcAdd(x, y) {
    console.log("in calcAdd of one.ts");
    return x + y;
}
exports.calcAdd = calcAdd;
function calcMultiply(x, y) {
    console.log("in calcMultiply of one.ts");
    return x * y;
}
exports.calcMultiply = calcMultiply;
exports.version = "1.0.0";
