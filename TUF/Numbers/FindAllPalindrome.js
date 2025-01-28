"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findAllPalindromeNumbers(max, min) {
    var result = [];
    for (var i = min; i <= max; i++) {
        if (checkPalindrome(i)) {
            result.push(i);
        }
    }
    console.log(result);
}
function checkPalindrome(num) {
    var rev = 0;
    var dup = num;
    while (num > 0) {
        var rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);
    }
    return dup == rev ? true : false;
}
var min = 50;
var max = 500;
findAllPalindromeNumbers(max, min);
