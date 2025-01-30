"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkEvenOrOdd(num) {
    return num % 2 == 0 ? "Even" : "Odd";
}
var num = 6;
console.log("".concat(num, " is a : ").concat(checkEvenOrOdd(num), " number."));
