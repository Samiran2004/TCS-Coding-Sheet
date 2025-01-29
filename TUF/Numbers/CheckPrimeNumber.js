"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkPrime(num) {
    var count = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return true;
    }
    else {
        return false;
    }
}
var num = 7;
console.log("".concat(num, " is a prime number: ").concat(checkPrime(num)));
