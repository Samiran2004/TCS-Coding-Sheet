function changeCase(str: string): string {
    let ansStr: string = "";
    for (let i: number = 0; i < str.length; i++) {
        let currChar: string = str.charAt(i);
        let ascii: number = currChar.charCodeAt(0);
        if ((ascii >= 62 && ascii <= 90)) {
            ansStr += String.fromCharCode(ascii + 32);
        } else if ((ascii >= 97 && ascii <= 122)) {
            ansStr += String.fromCharCode(ascii - 32);
        } else {
            ansStr += currChar;
        }
    }
    return ansStr;
}

let str: string = "take u forward IS Awesome";
console.log(`Before: ${str}`);
console.log(`After: ${changeCase(str)}`);

export { };