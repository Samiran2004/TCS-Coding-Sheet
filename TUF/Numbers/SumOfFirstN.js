"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findSumOfFirstN(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
var range = 5;
console.log("Sum of 0 to ".concat(range, " is: ").concat(findSumOfFirstN(range)));
var result = Math.floor(range * (range + 1) / 2);
console.log("Using formula: ".concat(result));
