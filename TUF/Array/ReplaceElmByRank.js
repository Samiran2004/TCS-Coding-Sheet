"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replaceElementByRank(arr) {
    var map = new Map();
    var brr = [];
    var temp = 1;
    for (var i = 0; i < arr.length; i++) {
        brr[i] = arr[i];
    }
    brr.sort(function (a, b) { return a - b; });
    for (var i = 0; i < arr.length; i++) {
        if (map.get(brr[i]) == null) {
            map.set(brr[i], temp);
            temp++;
        }
    }
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        result += "".concat(map.get(arr[i]), " ,");
    }
    console.log(result);
}
var arr = [20, 15, 26, 2, 98, 6];
replaceElementByRank(arr);
