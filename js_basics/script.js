console.log("hello");
//there are no datatypes for variables

//strongly typed vs weakly typed
// weakly typed: no datatype for variables
let x = 10;
console.log(x);

x = "a string"
console.log(x)

// statically typed vs dynamically typed

// objects
let obj = {};
console.log(typeof obj)

//can have heterogenous arrays
let arr = [10, 'x'];
// type of array is object. Anything not primitive is an object.
// check for array : Array.IsArray()

// if(true){
//     var x = 20;
//     console.log(x)
// }
// console.log(x)
// prints the same value 20, as var accesses the same variable. Doesn't happen with let.


// const k = 10;
// k = 11;
// gives an error.

// const obj makes pointer to the obj as constant.

let name = window.prompt("What is your name?")
document.body.append('Hello ' + name + " !!!!");