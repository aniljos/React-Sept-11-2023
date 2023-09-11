console.log("in one.ts");

//named export
export function calcAdd(x: number, y: number): number{

    console.log("in calcAdd of one.ts");
    return x + y;
}

export function calcMultiply(x: number, y: number): number{

    console.log("in calcMultiply of one.ts");
    return x * y;
}

export const version = "1.0.0";
