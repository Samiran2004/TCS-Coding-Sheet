"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isStrongNumber(num) {
    var sum = 0;
    var dupNum = num;
    while (num != 0) {
        var rem = num % 10;
        sum += findFactorial(rem);
        num = Math.floor(num / 10);
    }
    return dupNum == sum;
}
function findFactorial(num) {
    if (num == 0) {
        return 1;
    }
    else {
        return num * findFactorial(num - 1);
    }
}
var num = 145;
console.log("".concat(num, " is a strong number: ").concat(isStrongNumber(num) ? "Yes" : "No"));
