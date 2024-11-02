function maxSubArray(nums: number[]): number {
    let max: number = nums[0], sum: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
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

let arr: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Maximum Subarray: " + maxSubArray(arr));


export { };