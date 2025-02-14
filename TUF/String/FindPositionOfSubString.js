"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findSubStringPosition(str, subStr) {
    var strLen = str.length;
    var subStrLen = subStr.length;
    if (strLen < subStrLen) {
        throw new Error("Please enter a valid sub string...");
    }
    else {
        for (var i = 0; i < strLen; i++) {
            var temp = i;
            var j = 0;
            for (j = 0; j < subStrLen; j++) {
                if (str.charAt(temp) !== subStr.charAt(j)) {
                    break;
                }
                temp++;
            }
            if (j == subStrLen) {
                return i;
            }
        }
        return -1;
    }
}
var str = "takeuforward";
var subStr = "forward";
console.log(findSubStringPosition(str, subStr));
