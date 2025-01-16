"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateSumOfElements(arr, n) {
    var result = 0;
    if (arr.length == n) {
        result = arr.reduce(function (sum, current) { return sum + current; }, 0);
    }
    else {
        for (var i = 0; i < n; i++) {
            result += arr[i];
        }
    }
    return result;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var n = 5;
console.log(calculateSumOfElements(arr, n));
