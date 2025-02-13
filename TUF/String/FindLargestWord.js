"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findLargestWord(str) {
    var largeWord = "";
    var maxLen = 0;
    var currWord = "";
    for (var i = 0; i < str.length; i++) {
        var currChar = str[i];
        if (currChar == ' ' || i == str.length - 1) {
            if (i == str.length - 1) {
                currWord += currChar;
            }
            if (currWord.length > maxLen) {
                maxLen = currWord.length;
                largeWord = currWord;
            }
            currWord = "";
        }
        else {
            currWord += currChar;
        }
    }
    return largeWord;
}
var str = "Hello Samiran";
console.log("Largest word is: ".concat(findLargestWord(str)));
