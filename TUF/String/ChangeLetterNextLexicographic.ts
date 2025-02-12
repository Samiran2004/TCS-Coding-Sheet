function changeNextLexicographic(str: string): string {
    let ans: string = "";
    for (let i: number = 0; i < str.length; i++) {
        let currChar: string = str.charAt(i);
        let ascii: number = currChar.charCodeAt(0);
        if ((ascii >= 60 && ascii < 90) || (ascii >= 97 && ascii < 122)) {
            ans += String.fromCharCode(ascii + 1);
        } else if (ascii == 90) {
            ans += String.fromCharCode(60);
        } else if (ascii == 122) {
            ans += String.fromCharCode(97);
        }
    }
    return ans;
}

let str: string = "abcdxyz";
console.log(`Before: ${str}`);
console.log(`After: ${changeNextLexicographic(str)}`);

export { };