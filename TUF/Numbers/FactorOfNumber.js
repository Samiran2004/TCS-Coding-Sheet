"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findFactors(num) {
    var result = [];
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }
    console.log(result);
}
var num = 6;
findFactors(num);
