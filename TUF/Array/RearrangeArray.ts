function rearrangeArray(arr: number[]): void {
    arr.sort((a, b) => a - b);
    let result: number[] = [];
    for (let i: number = 0; i < arr.length / 2; i++) {
        result.push(arr[i]);
    }
    for (let i: number = arr.length - 1; i >= arr.length / 2; i--) {
        result.push(arr[i]);
    }
    console.log(result);
}

let arr: number[] = [5, 4, 7, 8, 3, 2, 9];
rearrangeArray(arr);

export { };