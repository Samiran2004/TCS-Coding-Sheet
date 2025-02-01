"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkIsLeapYear(year) {
    if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0) {
        return true;
    }
    else {
        return false;
    }
}
var year = 2001;
console.log("".concat(year, " is a leapyear: ").concat(checkIsLeapYear(year)));
