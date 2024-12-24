function findSmallestElm(arr: number[]): number {
    let smallest: number = arr[0];
    for (let i: number = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

let arr: number[] = [1, 2, 1, 6, 7, -1, 5, 6, 87, -5, 6, 45];
console.log(findSmallestElm(arr));

export { };