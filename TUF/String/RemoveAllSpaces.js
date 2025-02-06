"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeSpaces(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);
        if (currChar == ' ') {
            continue;
        }
        newStr += currChar;
    }
    return newStr;
}
var str = "Take you forward";
console.log("Before remove all spaces the string is: ".concat(str));
console.log("After remove all spaces the string is: ".concat(removeSpaces(str)));
