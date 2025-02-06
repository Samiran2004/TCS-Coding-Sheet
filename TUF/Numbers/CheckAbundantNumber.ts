function checkIsAbundantNumber(num: number): boolean {
    let sum: number = 0;
    let dupNum: number = num;
    while (num !== 0) {
        let rem: number = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    return sum < dupNum;
}

let num: number = 18;
console.log(`${num} is an abundant number: ${checkIsAbundantNumber(num) ? "Yes" : "No"}`);

export { };