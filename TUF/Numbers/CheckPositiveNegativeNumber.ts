function checkPositiveNegative(num: number): string {
    return num > 0 ? "Positive" : "Negative";
}

let num: number = 6;
console.log(`${num} is a ${checkPositiveNegative(num)} number.`);

export { };