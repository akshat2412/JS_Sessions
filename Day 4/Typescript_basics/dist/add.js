"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
function subtract(a, b) {
    return a - b;
}
// adding reference of a function to a variable
var subtractVariable;
subtractVariable = subtract;
var diff = subtractVariable(50, 20);
console.log(diff);
