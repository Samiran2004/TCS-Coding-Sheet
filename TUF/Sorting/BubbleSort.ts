function bubbleSort(arr: number[]): void {
    for (let i: number = arr.length - 1; i >= 0; i--) {
        for (let j: number = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp: number = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

let arr: number[] = [13, 46, 24, 52, 20, 9];
console.log(`Before sorting the array: ${arr}`);
bubbleSort(arr);
console.log(`After sorting the array: ${arr}`);

export { };