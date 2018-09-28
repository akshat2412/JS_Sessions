"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const decorators_1 = require("./decorators");
let MyComponent = class MyComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.x = 10;
    }
    hello() {
        console.log('hello');
    }
};
MyComponent = tslib_1.__decorate([
    decorators_1.Component
], MyComponent);
let m = new MyComponent();
console.log(m);
console.log(m.data.x);
m.methods.hello();
