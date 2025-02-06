"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bubbleSort(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
var arr = [13, 46, 24, 52, 20, 9];
console.log("Before sorting the array: ".concat(arr));
bubbleSort(arr);
console.log("After sorting the array: ".concat(arr));
