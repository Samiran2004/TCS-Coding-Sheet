"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumOfNumbersInString(str) {
    var tempSum = "0";
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);
        if (currChar >= "0" && currChar <= "9") {
            tempSum += currChar;
        }
        else {
            sum += Number(tempSum);
            tempSum = "0";
        }
    }
    return sum + Number.parseInt(tempSum);
}
var str = "1xyz23";
console.log("The string: ".concat(str));
console.log("The sum: ".concat(sumOfNumbersInString(str)));
