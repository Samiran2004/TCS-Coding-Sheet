"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findPower(num, pow) {
    if (pow == 0) {
        return 1;
    }
    else {
        return num * findPower(num, pow - 1);
    }
}
var num = 2;
var power = 5;
console.log("Result: ".concat(findPower(num, power)));
