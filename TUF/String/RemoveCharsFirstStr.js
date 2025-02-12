"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeCharsFromFirst(str1, str2) {
    var set = new Set();
    var ans = "";
    for (var _i = 0, str2_1 = str2; _i < str2_1.length; _i++) {
        var char = str2_1[_i];
        if (!set.has(char)) {
            set.add(char);
        }
    }
    for (var _a = 0, str1_1 = str1; _a < str1_1.length; _a++) {
        var char = str1_1[_a];
        if (!set.has(char)) {
            ans += char;
        }
    }
    return ans;
}
var str1 = "abcdef";
var str2 = "cefz";
console.log(removeCharsFromFirst(str1, str2));
