function findAllPalindromeNumbers(max: number, min: number): void {
    let result: number[] = [];
    for (let i: number = min; i <= max; i++) {
        if (checkPalindrome(i)) {
            result.push(i);
        }
    }
    console.log(result);
}

function checkPalindrome(num: number): boolean {
    let rev: number = 0;
    let dup: number = num;
    while (num > 0) {
        let rem: number = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);
    }
    return dup == rev ? true : false;
}

let min: number = 50;
let max: number = 500;
findAllPalindromeNumbers(max, min);

export { };