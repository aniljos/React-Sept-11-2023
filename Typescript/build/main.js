//deafult import
import processFromTwo from './two.js';
console.log("in main.ts");
const process = () => {
    console.log("process in main.ts");
};
//invoking main.ts
process();
//invoking two.ts
processFromTwo.process();
