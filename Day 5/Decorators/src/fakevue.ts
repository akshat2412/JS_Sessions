import { Component } from "./decorators";

// This is done to shut off the errors. Declare kw signifies that it is not meant for js. Just for ts.
declare class BaseComponent{
    data: any
    methods: any
}

@Component
class MyComponent extends BaseComponent{
    x = 10
    hello (){
        console.log('hello')
    }
}

let m = new MyComponent()
console.log(m)
console.log(m.data.x)
m.methods.hello()