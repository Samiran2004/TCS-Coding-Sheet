function removeSpaces(str: string): string {
    let newStr: string = "";
    for (let i: number = 0; i < str.length; i++) {
        let currChar: string = str.charAt(i);
        if (currChar == ' ') {
            continue;
        }
        newStr += currChar;
    }
    return newStr;
}

let str: string = "Take you forward";
console.log(`Before remove all spaces the string is: ${str}`);
console.log(`After remove all spaces the string is: ${removeSpaces(str)}`);

export { };