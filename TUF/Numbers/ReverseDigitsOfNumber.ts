function reverseNumber(num: number): number {
    if (num <= 10) {
        return num;
    } else {
        let revNum: number = 0;
        while (num !== 0) {
            let rem: number = num % 10;
            revNum = revNum * 10 + rem;
            num = Math.floor(num / 10);
        }
        return revNum;
    }
}

let num: number = 45678;
console.log(`Reverse of: ${num} is: ${reverseNumber(num)}`);

export { };