"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeDuplicates(str) {
    var set = new Set();
    var ans = "";
    for (var i = 0; i < str.length; i++) {
        if (!set.has(str.charAt(i))) {
            set.add(str.charAt(i));
            ans += str.charAt(i);
        }
    }
    return ans;
}
var str = "bcabc";
console.log(removeDuplicates(str));
