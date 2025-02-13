function sortChars(str: string): string {
    let charArr: string[] = [];
    for (const char of str) {
        charArr.push(char);
    }
    charArr.sort();
    let ans: string = "";
    for(const char of charArr) {
        ans += char;
    }
    return ans;
}

let str: string = "zxcbg";
console.log(`Before: ${str}`);
console.log(`After: ${sortChars(str)}`);

export { };