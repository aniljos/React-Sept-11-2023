console.log("Hello TypeScript");

var x = 10; // number, Type inference
console.log("x", x);
//x = "abc"; // Type checking

var y; // not initialized ==Infers the datatype to any
y = 20;
y = "abc";
console.log("y", y);

var z : number; // Type annotation
z = 200;
z = 3.14;
//z = "abc";

var foo: () => void;

foo = function(){
    
}

var obj: {id: number, name: string, location?: string};
obj = {id: 1, name: "Anil"};
obj.location = ""

var user = {id: 1, location: "Mumbai"};
//user = {id: 1}; //static type checking


var sum = (x: number, y:number) => x + y;







