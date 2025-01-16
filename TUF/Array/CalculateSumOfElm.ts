function calculateSumOfElements(arr: number[], n: number): number {
    let result: number = 0;
    if (arr.length == n) {
        result = arr.reduce((sum, current) => sum + current, 0);
    } else {
        for (let i: number = 0; i < n; i++) {
            result += arr[i];
        }
    }
    return result;
}

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n: number = 5;
console.log(calculateSumOfElements(arr, n));

export { };