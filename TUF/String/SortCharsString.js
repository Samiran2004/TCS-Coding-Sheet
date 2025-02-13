"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortChars(str) {
    var charArr = [];
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        charArr.push(char);
    }
    charArr.sort();
    var ans = "";
    for (var _a = 0, charArr_1 = charArr; _a < charArr_1.length; _a++) {
        var char = charArr_1[_a];
        ans += char;
    }
    return ans;
}
var str = "zxcbg";
console.log("Before: ".concat(str));
console.log("After: ".concat(sortChars(str)));
