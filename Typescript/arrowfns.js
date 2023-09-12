
var x  =10;

// implicit args => this, arguments
function sum(x, y){
    console.log("in sum ...", z);
    console.log("in sum ...", this);
}

 //window.sum(2,3);
// sum();
// sum(2,3,4,5);

console.log("global ...", this);
const calc = (a, b) => {
    
    //console.log("in calc ...", z);
    console.log("in calc ...", this);
}



//calc(2,3);