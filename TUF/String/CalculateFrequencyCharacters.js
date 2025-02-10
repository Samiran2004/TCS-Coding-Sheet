"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateFrequency(str) {
    var map = new Map();
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);
        map.set(currChar, (map.get(currChar) || 0) + 1);
    }
    for (var _i = 0, _a = map.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], Key = _b[0], value = _b[1];
        console.log("".concat(Key, ": ").concat(value));
    }
}
var str = "takeuforward";
calculateFrequency(str);
