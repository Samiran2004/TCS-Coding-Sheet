"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printAllDuplicates(str) {
    var map = new Map();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        map.set(char, (map.get(char) || 0) + 1);
    }
    for (var _a = 0, map_1 = map; _a < map_1.length; _a++) {
        var _b = map_1[_a], key = _b[0], value = _b[1];
        if (value > 1) {
            console.log("".concat(key, " --> ").concat(value));
        }
    }
}
var str = "sinstriiintng";
printAllDuplicates(str);
