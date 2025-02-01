"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseNumber(num) {
    if (num <= 10) {
        return num;
    }
    else {
        var revNum = 0;
        while (num !== 0) {
            var rem = num % 10;
            revNum = revNum * 10 + rem;
            num = Math.floor(num / 10);
        }
        return revNum;
    }
}
var num = 45678;
console.log("Reverse of: ".concat(num, " is: ").concat(reverseNumber(num)));
