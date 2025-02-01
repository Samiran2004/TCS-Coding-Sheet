"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        var last = fibonacci(n - 1);
        var slast = fibonacci(n - 2);
        return last + slast;
    }
}
var n = 6;
console.log(fibonacci(n));
