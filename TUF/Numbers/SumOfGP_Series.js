"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SumOfGP(a, r, n) {
    var sum = 0.0;
    for (var i = 0; i < n; i++) {
        sum += a;
        a = a * r;
    }
    return sum;
}
var a = 2.0;
var r = 1.5;
var n = 4;
console.log(SumOfGP(a, r, n));
