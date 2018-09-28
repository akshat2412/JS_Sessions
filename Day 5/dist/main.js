"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lib_1 = tslib_1.__importStar(require("./lib"));
lib_1.fun1();
console.log(lib_1.a);
console.log(lib_1.default.x);
function task() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield lib_1.doSomething();
    });
}
