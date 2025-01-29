function checkPerfectNumber(num: number): boolean {
    let sum: number = 0;
    for (let i: number = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    return sum == num ? true : false;
}

let num: number = 6;
console.log(`${num} is a perfect number: ${checkPerfectNumber(num)}`);

export { };