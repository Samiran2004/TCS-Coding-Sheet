"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findNonRepeatingElements(arr) {
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    var result = [];
    for (var _i = 0, _a = map.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (value == 1) {
            result.push(key);
        }
    }
    console.log("All non repeating elements are: ".concat(result));
}
var arr = [1, 2, 2, 3, 4, 3, 3, 4, 5, 6, 7];
findNonRepeatingElements(arr);
