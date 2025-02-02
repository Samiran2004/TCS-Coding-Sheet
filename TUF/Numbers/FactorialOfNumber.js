"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findFactorial(num) {
    if (num == 0) {
        return 1;
    }
    else {
        return num * findFactorial(num - 1);
    }
}
var num = 5;
console.log("Factorial of ".concat(num, " is: ").concat(findFactorial(num)));
