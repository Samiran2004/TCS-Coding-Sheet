"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countFreq(arr) {
    var visited = new Array(arr.length);
    visited.fill(false);
    for (var i = 0; i < arr.length; i++) {
        if (visited[i] == true) {
            continue;
        }
        var count = 1;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                visited[j] = true;
                count++;
            }
        }
        console.log("".concat(arr[i], ": ").concat(count));
    }
}
function freq(arr) {
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        map.set(arr[i], ((map.get(arr[i]) || 0) + 1));
    }
    for (var _i = 0, map_1 = map; _i < map_1.length; _i++) {
        var _a = map_1[_i], key = _a[0], value = _a[1];
        console.log("".concat(key, ": ").concat(value));
    }
}
var arr = [10, 5, 10, 15, 10, 5];
var arr2 = [1, 2, 2, 3, 3, 3];
try {
    console.log("First function called....");
    countFreq(arr);
    console.log("First function finished....");
}
catch (error) {
    console.log("Error in 1st function....");
}
try {
    console.log("2nd function called....");
    freq(arr2);
    console.log("2nd function finishef....");
}
catch (error) {
    console.log("Error in 2nd function....");
}
