"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countvowels_consonants_Spaces(str) {
    var countV = 0, countS = 0, countC = 0;
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);
        if (currChar == 'a' || currChar == 'e' || currChar == 'i' || currChar == 'o' || currChar == 'u') {
            countV++;
        }
        else if (currChar == ' ') {
            countS++;
        }
        else {
            countC++;
        }
    }
    console.log("Number of vowels in ".concat(str, " is: ").concat(countV));
    console.log("Number of consonants in ".concat(str, " is: ").concat(countC));
    console.log("Number of spaces in ".concat(str, " is: ").concat(countS));
}
var str = "Take u forward is Awesome";
countvowels_consonants_Spaces(str.toLocaleLowerCase());
