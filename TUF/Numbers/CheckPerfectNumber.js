"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkPerfectNumber(num) {
    var sum = 0;
    for (var i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    return sum == num ? true : false;
}
var num = 6;
console.log("".concat(num, " is a perfect number: ").concat(checkPerfectNumber(num)));
