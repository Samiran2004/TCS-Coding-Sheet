"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeDuplicatesFromSortedArray(arr) {
    if (arr.length == 0)
        return 0;
    var j = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    return j + 1;
}
function printArray(arr, size) {
    var result = "";
    result = "".concat(arr[0]);
    for (var i = 1; i < size; i++) {
        result += ", ".concat(arr[i]);
    }
    console.log(result);
}
var arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 7, 8, 9, 9, 9];
console.log("Before removing...");
printArray(arr, arr.length);
console.log("After removing...");
var newSize = removeDuplicatesFromSortedArray(arr);
printArray(arr, newSize);
