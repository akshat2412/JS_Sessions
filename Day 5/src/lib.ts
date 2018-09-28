export function fun1(){
    console.log('fun1')
    // if fun2() is called here, it will work fine from main.js
}

export const a = 10;
function fun2(){
    console.log('fun2')
}