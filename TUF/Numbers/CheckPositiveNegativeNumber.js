"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkPositiveNegative(num) {
    return num > 0 ? "Positive" : "Negative";
}
var num = 6;
console.log("".concat(num, " is a ").concat(checkPositiveNegative(num), " number."));
