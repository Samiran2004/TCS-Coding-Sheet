function checkEvenOrOdd(num: number): string {
    return num % 2 == 0 ? "Even" : "Odd";
}

let num: number = 6;
console.log(`${num} is a : ${checkEvenOrOdd(num)} number.`);

export { };