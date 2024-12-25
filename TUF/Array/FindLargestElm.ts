function findLargestElm(arr: number[]): number {
    let largestElm = arr[0];
    for (let i: number = 1; i < arr.length; i++) {
        if (largestElm < arr[i]) {
            largestElm = arr[i];
        }
    }
    return largestElm;
}

let arr: number[] = [2, 5, 1, 3, 0];
console.log(findLargestElm(arr));

export { };