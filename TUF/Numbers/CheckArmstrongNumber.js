"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkArmstrong(num) {
    var sum = 0;
    var dup = num;
    while (num > 0) {
        var rem = num % 10;
        sum += (rem * rem * rem);
        num = Math.floor(num / 10);
    }
    return dup == sum ? true : false;
}
var num = 153;
console.log("".concat(num, " is an armstrong number: ").concat(checkArmstrong(num)));
