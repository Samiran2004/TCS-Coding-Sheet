"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            var temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
}
var arr = [13, 46, 24, 52, 20, 9];
console.log("Before sorting the array: ".concat(arr));
insertionSort(arr);
console.log("After sorting the array: ".concat(arr));
