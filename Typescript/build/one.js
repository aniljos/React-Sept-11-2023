console.log("in one.ts");
//named export
export function calcAdd(x, y) {
    console.log("in calcAdd of one.ts");
    return x + y;
}
export function calcMultiply(x, y) {
    console.log("in calcMultiply of one.ts");
    return x * y;
}
export const version = "1.0.0";
