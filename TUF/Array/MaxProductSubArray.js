"use strict";
// function maxProductSubArray(arr: number[]): number {
//     let result: number = 0;
//     for (let i: number = 0; i < arr.length - 1; i++) {
//         for (let j: number = i; j < arr.length; j++) {
//             let prod: number = 1;
//             for (let k: number = i; k < j; k++) {
//                 prod = prod * arr[k];
//             }
//             result = Math.max(prod, result);
//         }
//     }
//     return result;
// }
Object.defineProperty(exports, "__esModule", { value: true });
function maxProductSubArray(arr) {
    var prod1 = arr[0];
    var prod2 = arr[0];
    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        var temp = Math.max(arr[i], Math.max(prod1 * arr[i], prod2 * arr[i]));
        prod2 = Math.min(arr[i], Math.min(prod1 * arr[i], prod2 * arr[i]));
        prod1 = temp;
        result = Math.max(result, prod1);
    }
    return result;
}
var arr = [1, 2, 3, 4, 5, 0];
console.log("Maximum Product Subarray in an Array: ".concat(maxProductSubArray(arr)));
