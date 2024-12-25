"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findLargestElm(arr) {
    var largestElm = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (largestElm < arr[i]) {
            largestElm = arr[i];
        }
    }
    return largestElm;
}
var arr = [2, 5, 1, 3, 0];
console.log(findLargestElm(arr));
