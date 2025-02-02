function checkIsHarsadNumber(num: number): boolean {
    let sum: number = 0;
    let dupNum: number = num;
    while (num != 0) {
        let rem: number = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    return dupNum % sum == 0;
}

let num: number = 378;
console.log(`${num} is a harsad number: ${checkIsHarsadNumber(num) ? "Yes" : "No"}`);

export { };