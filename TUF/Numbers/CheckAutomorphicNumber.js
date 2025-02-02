"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAutomorphicNumber(num) {
    var finalNum = num * num;
    return findLastDigit(finalNum) == findLastDigit(num);
}
function findLastDigit(num) {
    return num % 10;
}
var num = 76;
console.log("".concat(num, " is an automorphic number: ").concat(isAutomorphicNumber(num) ? "Yes" : "No"));
