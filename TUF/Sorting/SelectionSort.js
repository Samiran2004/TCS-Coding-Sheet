"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var mini = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[mini];
        arr[mini] = temp;
    }
}
var arr = [13, 46, 24, 52, 20, 9];
console.log("Array before sorting: ".concat(arr));
selectionSort(arr);
console.log("Array after sorting: ".concat(arr));
