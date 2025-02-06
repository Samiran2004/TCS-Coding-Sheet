"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeAllVowels(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);
        if (isVowel(currChar)) {
            continue;
        }
        newStr += currChar;
    }
    return newStr;
}
function isVowel(currChar) {
    if (currChar == 'a' || currChar == 'e' || currChar == 'i' || currChar == 'o' || currChar == 'u') {
        return true;
    }
    return false;
}
var str = "take u forward";
console.log("Before removing all vowels the string: ".concat(str));
console.log("After removing all vowels the string: ".concat(removeAllVowels(str)));
