function removeCharacters(str: string): string {
    let newString: string = "";
    for (let i: number = 0; i < str.length; i++) {
        let currChar: string = str.charAt(i);
        if (isSpecialChar(currChar)) {
            continue;
        } else {
            newString += currChar;
        }
    }
    return newString;
}

function isSpecialChar(currChar: string): boolean {
    let ascii: number = currChar.charCodeAt(0);
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
        return false;
    }
    return true;
}

let str: string = "take12% *&u ^$#forward";
console.log(`Before removing all characters from a string except alphabets: ${str}`);
console.log(`After removing all characters from a string except alphabets: ${removeCharacters(str)}`);

export { };