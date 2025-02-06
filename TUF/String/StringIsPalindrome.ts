function checkIsPalindromString(str: string): boolean {
    let revString = "";
    for (let i: number = str.length - 1; i >= 0; i--) {
        revString += str.charAt(i);
    }
    return revString === str;
}

function checkIsPalindromString0Sp(str: string): boolean {
    let i: number = 0, j: number = str.length - 1; 
    while(i<=j) {
        if(str.charAt(i) !== str.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

let str: string = "madam";
console.log(`${str} is a palindrome string: ${checkIsPalindromString(str)}`);
console.log(`${str} is a palindrome string: ${checkIsPalindromString0Sp(str)}`);

export {};