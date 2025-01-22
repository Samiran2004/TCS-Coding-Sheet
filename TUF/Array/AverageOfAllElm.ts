function findAvgOfAllElm(arr: number[]): number {
    let sum: number = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum / arr.length;
}

let arr: number[] = [1, 2, 1, 1, 5, 1];
console.log(`Average of all elements: ${findAvgOfAllElm(arr)}`);

export { };