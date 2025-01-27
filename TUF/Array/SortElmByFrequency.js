"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortElementByFrequency(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return;
    }
    var map = new Map();
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    while (map.size !== 0) {
        var maxElm = findMaxFrequency(map);
        var maxFreq = map.get(maxElm);
        for (var j = 0; j < maxFreq; j++) {
            newArr.push(maxElm);
        }
        map.delete(maxElm);
    }
    console.log(newArr.join(", "));
}
function findMaxFrequency(map) {
    var maxElm = -1;
    var maxFreq = 0;
    for (var _i = 0, _a = map.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (value > maxFreq) {
            maxElm = key;
            maxFreq = value;
        }
    }
    return maxElm;
}
var arr = [1, 2, 3, 2, 4, 3, 1, 2];
sortElementByFrequency(arr);
