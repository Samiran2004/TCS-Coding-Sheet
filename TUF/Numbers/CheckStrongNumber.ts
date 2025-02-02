function isStrongNumber(num: number): boolean {
    let sum: number = 0;
    let dupNum: number = num;
    while (num != 0) {
        let rem: number = num % 10;
        sum += findFactorial(rem);
        num = Math.floor(num / 10);
    }
    return dupNum == sum;
}

function findFactorial(num: number): number {
    if (num == 0) {
        return 1;
    } else {
        return num * findFactorial(num - 1);
    }
}

let num: number = 145;
console.log(`${num} is a strong number: ${isStrongNumber(num) ? "Yes" : "No"}`);

export { };