"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Special(constructor) {
    console.log(constructor);
    constructor.prototype.hello = function () {
        console.log("added by decorator");
    };
}
exports.Special = Special;
function Component(ctor) {
    return class extends ctor {
        constructor() {
            super();
            this.data = {
                x: this.x
            };
            this.methods = {
                hello: this.hello
            };
        }
    };
}
exports.Component = Component;
