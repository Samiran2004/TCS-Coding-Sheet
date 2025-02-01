function findMaxDigit(num: number): number {
    if (num < 10) {
        return num;
    } else {
        let maxNum = Number.MIN_VALUE;
        while (num !== 0) {
            let rem: number = num % 10;
            if (maxNum < rem) {
                maxNum = rem;
            }
            num = Math.floor(num / 10);
        }
        return maxNum;
    }
}

function findMinDigit(num: number): number {
    if (num < 10) {
        return num;
    } else {
        let minNum = Number.MAX_VALUE;
        while (num !== 0) {
            let rem: number = num % 10;
            if (minNum > rem) {
                minNum = rem;
            }
            num = Math.floor(num / 10);
        }
        return minNum;
    }
}

let num: number = 2746;
console.log(`In ${num}, Max digit: ${findMaxDigit(num)} and Min digit: ${findMinDigit(num)}`);

export { };