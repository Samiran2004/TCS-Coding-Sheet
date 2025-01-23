function findSymmetricPairs(arr: number[][]): void {
    let map = new Map<number, number>();
    for (let i: number = 0; i < arr.length; i++) {
        let first: number = arr[i][0];
        let second: number = arr[i][1];
        if (map.get(second) != null && map.get(second) == first) {
            console.log("(" + first + " " + second + ") ");
        } else {
            map.set(first, second);
        }
    }
}

let arr: number[][] = [[1, 2], [2, 1], [3, 4], [4, 5], [5, 4]];
findSymmetricPairs(arr);

export { };