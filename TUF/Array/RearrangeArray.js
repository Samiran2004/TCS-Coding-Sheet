"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rearrangeArray(arr) {
    arr.sort(function (a, b) { return a - b; });
    var result = [];
    for (var i = 0; i < arr.length / 2; i++) {
        result.push(arr[i]);
    }
    for (var i = arr.length - 1; i >= arr.length / 2; i--) {
        result.push(arr[i]);
    }
    console.log(result);
}
var arr = [5, 4, 7, 8, 3, 2, 9];
rearrangeArray(arr);
