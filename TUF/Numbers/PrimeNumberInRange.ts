function findPrimeNumbers(start: number, end: number): void {
    let arr: number[] = [];
    for (let i: number = start; i <= end; i++) {
        if (checkIsPrime(i)) {
            arr.push(i);
        }
    }
    console.log(arr);
}

function checkIsPrime(num: number): boolean {
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

let start: number = 2;
let end: number = 10;
findPrimeNumbers(start, end);

export { };