function removeAllVowels(str: string): string {
    let newStr: string = "";
    for (let i: number = 0; i < str.length; i++) {
        let currChar: string = str.charAt(i);
        if (isVowel(currChar)) {
            continue;
        }
        newStr += currChar;
    }
    return newStr;
}

function isVowel(currChar: string): boolean {
    if (currChar == 'a' || currChar == 'e' || currChar == 'i' || currChar == 'o' || currChar == 'u') {
        return true;
    }
    return false;
}

let str: string = "take u forward";
console.log(`Before removing all vowels the string: ${str}`);
console.log(`After removing all vowels the string: ${removeAllVowels(str)}`);

export { };