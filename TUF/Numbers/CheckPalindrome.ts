function checkIsPalindrome(num: number): boolean {
    let rev: number = 0;
    let dup: number = num;
    while (num > 0) {
        let rem: number = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);
    }
    return dup === rev ? true : false;
}

let num: number = 4554;
let result: boolean = checkIsPalindrome(num);
if (result == true) {
    console.log(`${num} is a palindrome number.`);
} else {
    console.log(`${num} is not a palindrome number.`);
}