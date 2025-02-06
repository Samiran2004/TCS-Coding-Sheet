function insertionSort(arr: number[]): void {
    for (let i: number = 0; i < arr.length; i++) {
        let j: number = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp: number = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
}

let arr: number[] = [13, 46, 24, 52, 20, 9];
console.log(`Before sorting the array: ${arr}`);
insertionSort(arr);
console.log(`After sorting the array: ${arr}`);

export { };
