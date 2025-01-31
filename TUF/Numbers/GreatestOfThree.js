"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findGreatestAmongThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
var num1 = 4;
var num2 = 3;
var num3 = 6;
console.log(findGreatestAmongThree(num1, num2, num3));
