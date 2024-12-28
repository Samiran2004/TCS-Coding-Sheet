function countFreq(arr: number[]): void {
    let visited: boolean[] = new Array(arr.length);
    visited.fill(false);
    for (let i: number = 0; i < arr.length; i++) {
        if (visited[i] == true) {
            continue;
        }
        let count: number = 1;
        for (let j: number = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                visited[j] = true;
                count++;
            }
        }
        console.log(`${arr[i]}: ${count}`);
    }
}

function freq(arr: number[]): void {
    let map: Map<number, number> = new Map<number, number>();
    for (let i: number = 0; i < arr.length; i++) {
        map.set(arr[i], ((map.get(arr[i]) || 0) + 1));
    }
    for (let [key, value] of map) {
        console.log(`${key}: ${value}`);
    }
}

let arr: number[] = [10, 5, 10, 15, 10, 5];
let arr2: number[] = [1, 2, 2, 3, 3, 3]
try {
    console.log("First function called....");
    countFreq(arr);
    console.log("First function finished....");
} catch (error) {
    console.log("Error in 1st function....");
}
try {
    console.log("2nd function called....");
    freq(arr2);
    console.log("2nd function finishef....");
} catch (error) {
    console.log("Error in 2nd function....");
}

export { };