function findPower(num: number, pow: number): number {
    if (pow == 0) {
        return 1;
    } else {
        return num * findPower(num, pow - 1);
    }
}

let num: number = 2;
let power: number = 5;
console.log(`Result: ${findPower(num, power)}`);

export { };