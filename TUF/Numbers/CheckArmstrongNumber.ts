function checkArmstrong(num: number): boolean {
    let sum: number = 0;
    let dup: number = num;
    while (num > 0) {
        let rem: number = num % 10;
        sum += (rem * rem * rem);
        num = Math.floor(num / 10);
    }
    return dup == sum ? true : false;
}

let num: number = 153;
console.log(`${num} is an armstrong number: ${checkArmstrong(num)}`);

export { };