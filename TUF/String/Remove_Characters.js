"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeCharacters(str) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);
        if (isSpecialChar(currChar)) {
            continue;
        }
        else {
            newString += currChar;
        }
    }
    return newString;
}
function isSpecialChar(currChar) {
    var ascii = currChar.charCodeAt(0);
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
        return false;
    }
    return true;
}
var str = "take12% *&u ^$#forward";
console.log("Before removing all characters from a string except alphabets: ".concat(str));
console.log("After removing all characters from a string except alphabets: ".concat(removeCharacters(str)));
