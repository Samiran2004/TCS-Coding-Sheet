function replaceElementByRank(arr: number[]): void {
    let map = new Map<number, number>();
    let brr: number[] = [];
    let temp: number = 1;
    for (let i: number = 0; i < arr.length; i++) {
        brr[i] = arr[i];
    }
    brr.sort((a, b) => a - b);
    for (let i: number = 0; i < arr.length; i++) {
        if (map.get(brr[i]) == null) {
            map.set(brr[i], temp);
            temp++;
        }
    }
    let result = "";
    for (let i: number = 0; i < arr.length; i++) {
        result += `${map.get(arr[i])} ,`;
    }
    console.log(result);
}

let arr: number[] = [20, 15, 26, 2, 98, 6];
replaceElementByRank(arr);

export { };