import lib, { fun1, a, doSomething } from './lib'
// import lib from './lib'
import * as libStar from './lib'

fun1()

console.log(a)
console.log(lib.x)

async function task(){
    await doSomething()
}