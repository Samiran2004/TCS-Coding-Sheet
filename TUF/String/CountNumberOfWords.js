"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countNumberOfWords(str) {
    var count = 1;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (char == ' ') {
            count++;
        }
    }
    return count;
}
var str = "Hello World";
console.log(countNumberOfWords(str));
