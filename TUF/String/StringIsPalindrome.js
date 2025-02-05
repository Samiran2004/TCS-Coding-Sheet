"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkIsPalindromString(str) {
    var revString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revString += str.charAt(i);
    }
    return revString === str;
}
function checkIsPalindromString0Sp(str) {
    var i = 0, j = str.length - 1;
    while (i <= j) {
        if (str.charAt(i) !== str.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
var str = "madam";
console.log("".concat(str, " is a palindrome string: ").concat(checkIsPalindromString(str)));
console.log("".concat(str, " is a palindrome string: ").concat(checkIsPalindromString0Sp(str)));
