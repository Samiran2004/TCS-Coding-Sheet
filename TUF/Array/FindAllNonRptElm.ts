function findNonRepeatingElements(arr: number[]): void {
    let map = new Map<number, number>();
    for (let i: number = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    let result: number[] = [];
    for (let [key, value] of map.entries()) {
        if (value == 1) {
            result.push(key);
        }
    }
    console.log(`All non repeating elements are: ${result}`);
}

let arr: number[] = [1, 2, 2, 3, 4, 3, 3, 4, 5, 6, 7];
findNonRepeatingElements(arr);

export { };