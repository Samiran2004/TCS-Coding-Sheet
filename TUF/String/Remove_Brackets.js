"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeBrackets(exp) {
    var newExp = "";
    for (var i = 0; i < exp.length; i++) {
        var currChar = exp.charAt(i);
        if (currChar == '(' || currChar == ')') {
            continue;
        }
        newExp += currChar;
    }
    return newExp;
}
var exp = "(((a-b))+c)";
console.log("Before remove all brackets: ".concat(exp));
console.log("After remove all brackets: ".concat(removeBrackets(exp)));
