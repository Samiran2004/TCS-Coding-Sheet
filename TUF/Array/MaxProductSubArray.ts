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

function maxProductSubArray(arr: number[]): number {
    let prod1: number = arr[0];
    let prod2: number = arr[0];
    let result: number = arr[0];
    for (let i: number = 1; i < arr.length; i++) {
        let temp: number = Math.max(arr[i], Math.max(prod1 * arr[i], prod2 * arr[i]));
        prod2 = Math.min(arr[i], Math.min(prod1 * arr[i], prod2 * arr[i]));
        prod1 = temp;
        result = Math.max(result, prod1);
    }
    return result;
}

let arr: number[] = [1, 2, 3, 4, 5, 0];
console.log(`Maximum Product Subarray in an Array: ${maxProductSubArray(arr)}`);
export { };