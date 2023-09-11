//Hoisting : var x, var y;


console.log("x", x);
var x = 10;

console.log("x", x); // 10

var y;
console.log("y", y); // undefined


//console.log("z", z); // runtime error


function foo(){
    //Hoisting  var a; 


    var a = 5;
    console.log("foo...");
    if(a < 10){
        let msg = "hello";
        console.log("msg", msg);
    }
    //console.log("msg", msg); //refrence error
}
foo();

console.log("App over");