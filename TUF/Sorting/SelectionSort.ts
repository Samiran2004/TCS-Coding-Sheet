function selectionSort(arr: number[]): void {
    for (let i: number = 0; i < arr.length - 1; i++) {
        let mini: number = i;
        for (let j: number = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }

        let temp: number = arr[i];
        arr[i] = arr[mini];
        arr[mini] = temp;
    }
}

let arr: number[] = [13, 46, 24, 52, 20, 9];
console.log(`Array before sorting: ${arr}`);
selectionSort(arr);
console.log(`Array after sorting: ${arr}`);

export { };