function findSumOfFirstN(num: number): number {
    let sum: number = 0;
    for (let i: number = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

let range: number = 5;
console.log(`Sum of 0 to ${range} is: ${findSumOfFirstN(range)}`);

let result: number = Math.floor(range * (range + 1) / 2);
console.log(`Using formula: ${result}`);

export { };