"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function changeNextLexicographic(str) {
    var ans = "";
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);
        var ascii = currChar.charCodeAt(0);
        if ((ascii >= 60 && ascii < 90) || (ascii >= 97 && ascii < 122)) {
            ans += String.fromCharCode(ascii + 1);
        }
        else if (ascii == 90) {
            ans += String.fromCharCode(60);
        }
        else if (ascii == 122) {
            ans += String.fromCharCode(97);
        }
    }
    return ans;
}
var str = "abcdxyz";
console.log("Before: ".concat(str));
console.log("After: ".concat(changeNextLexicographic(str)));
