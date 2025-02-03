function binaryToDecimal(num: string): number {
    let n: number = num.length;
    let base: number = 1;
    let ans: number = 0;
    for (let i: number = n - 1; i >= 0; i--) {
        if (num.charAt(i) === '1') {
            ans += base;
        }
        base = base * 2;
    }
    return ans;
}

let num: string = '1011';
console.log(`${num} is decimal is: ${binaryToDecimal(num)}`);

export { };