"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findSumOfAP(n, a, d) {
    var sum = 0;
    var currNum = a;
    for (var i = 0; i < n; i++) {
        sum += currNum;
        currNum += d;
    }
    return sum;
}
function findSumOfAP_Formula(n, a, d) {
    return ((Math.floor(n / 2)) * (2 * a + (n - 1) * d));
}
var n = 8;
var a = -2;
var d = 5;
console.log(findSumOfAP(n, a, d));
console.log(findSumOfAP_Formula(n, a, d));
