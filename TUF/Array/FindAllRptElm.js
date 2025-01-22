"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findRepeatingElements(arr) {
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    var resultArray = [];
    for (var _i = 0, _a = map.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (value > 1) {
            resultArray.push(key);
        }
    }
    console.log("The repeating elements are: ", resultArray);
}
var arr = [1, 2, 4, 3, 3, 4, 5, 6, 7, 8, 9];
findRepeatingElements(arr);
