function findFactors(num: number): void {
    let result: number[] = [];
    for (let i: number = 1; i <= num; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }
    console.log(result);
}

let num: number = 6;
findFactors(num);

export { };