"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findSmallestElm(arr) {
    var smallest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
var arr = [1, 2, 1, 6, 7, -1, 5, 6, 87, -5, 6, 45];
console.log(findSmallestElm(arr));
