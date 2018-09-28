"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fun1() {
    console.log('fun1');
    // if fun2() is called here, it will work fine from main.js
}
exports.fun1 = fun1;
exports.a = 10;
function fun2() {
    console.log('fun2');
}
