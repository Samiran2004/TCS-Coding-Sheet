"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findPrimeNumbers(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (checkIsPrime(i)) {
            arr.push(i);
        }
    }
    console.log(arr);
}
function checkIsPrime(num) {
    var count = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return true;
    }
    else {
        return false;
    }
}
var start = 2;
var end = 10;
findPrimeNumbers(start, end);
