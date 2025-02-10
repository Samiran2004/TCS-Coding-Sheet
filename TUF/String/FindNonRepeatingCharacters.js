"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findNonRepeatingChars(str) {
    var charCounts = new Map();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        charCounts.set(char, (charCounts.get(char) || 0) + 1);
    }
    var nonRepeatingChars = [];
    for (var _a = 0, str_2 = str; _a < str_2.length; _a++) {
        var char = str_2[_a];
        if (charCounts.get(char) === 1) {
            nonRepeatingChars.push(char);
        }
    }
    return nonRepeatingChars;
}
var str = "google";
var result = findNonRepeatingChars(str);
console.log(result);
str = "";
var result2 = findNonRepeatingChars(str);
console.log(result2);
str = "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz";
var result3 = findNonRepeatingChars(str);
console.log(result3);
str = "aabbc";
var result4 = findNonRepeatingChars(str);
console.log(result4);
