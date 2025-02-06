"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkIsHarsadNumber(num) {
    var sum = 0;
    var dupNum = num;
    while (num != 0) {
        var rem = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    return dupNum % sum == 0;
}
var num = 378;
console.log("".concat(num, " is a harsad number: ").concat(checkIsHarsadNumber(num) ? "Yes" : "No"));
