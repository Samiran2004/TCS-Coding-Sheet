function sortElementByFrequency(arr: number[]): void {
    if (arr.length === 0) {
        console.log("Array is empty");
        return;
    }

    let map = new Map<number, number>();
    let newArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    while (map.size !== 0) {
        let maxElm: number = findMaxFrequency(map);
        let maxFreq: number = map.get(maxElm)!;
        for (let j = 0; j < maxFreq; j++) {
            newArr.push(maxElm);
        }
        map.delete(maxElm);
    }

    console.log(newArr.join(", "));
}

function findMaxFrequency(map: Map<number, number>): number {
    let maxElm: number = -1;
    let maxFreq: number = 0;
    for (let [key, value] of map.entries()) {
        if (value > maxFreq) {
            maxElm = key;
            maxFreq = value;
        }
    }
    return maxElm;
}

let arr: number[] = [1, 2, 3, 2, 4, 3, 1, 2];
sortElementByFrequency(arr);

export { };