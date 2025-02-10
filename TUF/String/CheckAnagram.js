"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkStringAnagram(str1, str2) {
    var map = new Map();
    if (str1.length !== str2.length) {
        return false;
    }
    for (var i = 0; i < str1.length; i++) {
        var currChar = str1.charAt(i);
        map.set(currChar, (map.get(currChar) || 0) + 1);
    }
    for (var i = 0; i < str2.length; i++) {
        var currChar = str2.charAt(i);
        map.set(currChar, (map.get(currChar) || 0) + 1);
    }
    for (var _i = 0, _a = map.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (value % 2 !== 0) {
            return false;
        }
    }
    return true;
}
var str1 = "CAT";
var str2 = "ACT";
console.log(checkStringAnagram(str1, str2));
