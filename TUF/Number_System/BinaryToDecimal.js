"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function binaryToDecimal(num) {
    var n = num.length;
    var base = 1;
    var ans = 0;
    for (var i = n - 1; i >= 0; i--) {
        if (num.charAt(i) === '1') {
            ans += base;
        }
        base = base * 2;
    }
    return ans;
}
var num = '1011';
console.log("".concat(num, " is decimal is: ").concat(binaryToDecimal(num)));
