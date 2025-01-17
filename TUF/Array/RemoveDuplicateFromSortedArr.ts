function removeDuplicatesFromSortedArray(arr: number[]): number {
    if (arr.length == 0) return 0;
    let j: number = 0;
    for (let i: number = 1; i < arr.length; i++) {
        if (arr[i] != arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    return j + 1;
}

function printArray(arr: number[], size: number): void {
    let result: string = "";
    result = `${arr[0]}`;
    for (let i: number = 1; i < size; i++) {
        result += `, ${arr[i]}`;
    }
    console.log(result);
}

let arr: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 7, 8, 9, 9, 9];
console.log("Before removing...");
printArray(arr, arr.length);
console.log("After removing...");
let newSize: number = removeDuplicatesFromSortedArray(arr);
printArray(arr, newSize);


export { };