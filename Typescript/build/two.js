import { calcAdd } from './one.js';
console.log("in two.ts");
function process() {
    console.log("process in two.ts");
    calcAdd(3, 4);
}
function process1() {
    console.log("process in two.ts");
    calcAdd(3, 4);
}
export default {
    process, process1
};
