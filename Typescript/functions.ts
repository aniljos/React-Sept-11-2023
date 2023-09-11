// function statement
function sum1(x, y){

}
// 4, 5 are the explicit args
// implicit args : this, arguments
sum1(4, 5);

//function expression
var add = function(x, y){
    return x + y;
}
console.log("add", add(2, 3));

// foo(add); // function bar() { return add;}

//arrow function

var calc = (x, y) => {
    return x + y;
}
console.log("calc", calc(2, 3));

calc = (x, y) => x * y;
console.log("calc", calc(2, 3));

var squareIt =  x => x * x;
console.log("squareIt", squareIt(33));


const user1 = {
    id: 100,
    print: function(){

      

        console.log("Id: ", this.id);
        setTimeout(function(){
           
            
            console.log("Id after 2secs: ", this.id);
        
        }, 2000);

        setTimeout(()=> {
            console.log("Id after 2secs arrowfn: ", this.id);
        }, 2000);
    }
}

user1.print();