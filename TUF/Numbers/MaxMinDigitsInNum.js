"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findMaxDigit(num) {
    if (num < 10) {
        return num;
    }
    else {
        var maxNum = Number.MIN_VALUE;
        while (num !== 0) {
            var rem = num % 10;
            if (maxNum < rem) {
                maxNum = rem;
            }
            num = Math.floor(num / 10);
        }
        return maxNum;
    }
}
function findMinDigit(num) {
    if (num < 10) {
        return num;
    }
    else {
        var minNum = Number.MAX_VALUE;
        while (num !== 0) {
            var rem = num % 10;
            if (minNum > rem) {
                minNum = rem;
            }
            num = Math.floor(num / 10);
        }
        return minNum;
    }
}
var num = 2746;
console.log("In ".concat(num, ", Max digit: ").concat(findMaxDigit(num), " and Min digit: ").concat(findMinDigit(num)));
