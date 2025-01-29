function checkPrime(num: number): boolean {
    let count: number = 0;
    for (let i: number = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return true;
    } else {
        return false;
    }
}

let num: number = 7;
console.log(`${num} is a prime number: ${checkPrime(num)}`);

export { };