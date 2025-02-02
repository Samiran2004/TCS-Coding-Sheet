"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkIsAbundantNumber(num) {
    var sum = 0;
    var dupNum = num;
    while (num !== 0) {
        var rem = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    return sum < dupNum;
}
var num = 18;
console.log("".concat(num, " is an abundant number: ").concat(checkIsAbundantNumber(num) ? "Yes" : "No"));
