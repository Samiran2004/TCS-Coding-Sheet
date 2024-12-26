"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findSecondLargestElm(arr) {
    var largestElm = Number.MIN_VALUE;
    var secondLargElm = Number.MIN_VALUE;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largestElm) {
            secondLargElm = largestElm;
            largestElm = arr[i];
        }
        else if (arr[i] > secondLargElm && arr[i] != largestElm) {
            secondLargElm = arr[i];
        }
    }
    return secondLargElm;
}
function findSecondSmallestElm(arr) {
    var smallestElm = Number.MAX_VALUE;
    var secondSmallElm = Number.MAX_VALUE;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < smallestElm) {
            secondSmallElm = smallestElm;
            smallestElm = arr[i];
        }
        else if (arr[i] < secondSmallElm && arr[i] != smallestElm) {
            secondSmallElm = arr[i];
        }
    }
    return secondSmallElm;
}
var arr = [1, 2, 4, 7, 7, 5];
console.log("Second largest element: ".concat(findSecondLargestElm(arr)));
console.log("Second smallest element: ".concat(findSecondSmallestElm(arr)));
