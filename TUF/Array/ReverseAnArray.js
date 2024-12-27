"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseArray(arr) {
    var start = 0, end = arr.length - 1;
    while (start <= end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Before reverse the array: ".concat(arr));
reverseArray(arr);
console.log("After reverse the array: ".concat(arr));
