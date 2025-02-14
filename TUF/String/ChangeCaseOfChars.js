"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function changeCase(str) {
    var ansStr = "";
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);
        var ascii = currChar.charCodeAt(0);
        if ((ascii >= 62 && ascii <= 90)) {
            ansStr += String.fromCharCode(ascii + 32);
        }
        else if ((ascii >= 97 && ascii <= 122)) {
            ansStr += String.fromCharCode(ascii - 32);
        }
        else {
            ansStr += currChar;
        }
    }
    return ansStr;
}
var str = "take u forward IS Awesome";
console.log("Before: ".concat(str));
console.log("After: ".concat(changeCase(str)));
