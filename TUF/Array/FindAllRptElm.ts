function findRepeatingElements(arr: number[]): void {
    let map = new Map<number, number>();
    for (let i: number = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    let resultArray: number[] = [];
    for (let [key, value] of map.entries()) {
        if (value > 1) {
            resultArray.push(key);
        }
    }
    console.log("The repeating elements are: ", resultArray);
}

let arr: number[] = [1, 2, 4, 3, 3, 4, 5, 6, 7, 8, 9];
findRepeatingElements(arr);

export { };