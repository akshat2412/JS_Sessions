"use strict"

function add(a : number, b : number){
    return a+b;
}

console.log(add(2, 3))


function subtract(a: number, b: number): number{
    return a - b;
}

// adding reference of a function to a variable
let subtractVariable : (a: number, b: number) => number;
subtractVariable = subtract;

let diff: number = subtractVariable(50, 20);
console.log(diff)