"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findAvgOfAllElm(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        sum += i;
    }
    return sum / arr.length;
}
var arr = [1, 2, 1, 1, 5, 1];
console.log("Average of all elements: ".concat(findAvgOfAllElm(arr)));
