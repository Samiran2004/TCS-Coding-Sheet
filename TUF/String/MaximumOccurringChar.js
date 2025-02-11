"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findMaxOccuringChar(str) {
    if (str.length == 0) {
        throw new Error("Length should be greater than 0");
    }
    var strArr = [];
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        strArr.push(char);
    }
    strArr.sort();
    var count = 0;
    var maxOccuringChar = "";
    for (var i = 0; i < strArr.length; i++) {
        var tempCount = 0;
        var j = i + 1;
        while (strArr[j] == strArr[i]) {
            tempCount++;
            j++;
        }
        if (count < tempCount) {
            count = tempCount;
            maxOccuringChar = strArr[i];
        }
        tempCount = 0;
    }
    return maxOccuringChar;
}
console.log(findMaxOccuringChar("takeuforward"));
console.log(findMaxOccuringChar("apple"));
function generateString(length) {
    if (length <= 0) {
        return "";
    }
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Characters to use
    var charactersLength = characters.length;
    var result = "";
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
var longString = generateString(2000000);
console.log(findMaxOccuringChar(longString));
