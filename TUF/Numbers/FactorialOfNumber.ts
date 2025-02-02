function findFactorial(num: number): number {
    if (num == 0) {
        return 1;
    } else {
        return num * findFactorial(num - 1);
    }
}

let num: number = 5;
console.log(`Factorial of ${num} is: ${findFactorial(num)}`);

export { };