"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxSubArray(nums) {
    var max = nums[0], sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}
var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Maximum Subarray: " + maxSubArray(arr));
