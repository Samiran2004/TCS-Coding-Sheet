"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findSymmetricPairs(arr) {
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        var first = arr[i][0];
        var second = arr[i][1];
        if (map.get(second) != null && map.get(second) == first) {
            console.log("(" + first + " " + second + ") ");
        }
        else {
            map.set(first, second);
        }
    }
}
var arr = [[1, 2], [2, 1], [3, 4], [4, 5], [5, 4]];
findSymmetricPairs(arr);
