function reverseArray(arr: number[]): void {
    let start: number = 0, end: number = arr.length - 1;
    while (start <= end) {
        let temp: number = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Time-Complexity:=> O(n)
// Space-Complexity:=> O(1)

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Before reverse the array: ${arr}`);
reverseArray(arr);
console.log(`After reverse the array: ${arr}`);

export { };