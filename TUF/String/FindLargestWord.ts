function findLargestWord(str: string): string {
    let largeWord: string = "";
    let maxLen: number = 0;
    let currWord: string = "";
    for (let i: number = 0; i < str.length; i++) {
        let currChar: string = str[i];
        if (currChar == ' ' || i == str.length - 1) {
            if (i == str.length - 1) {
                currWord += currChar;
            }
            if (currWord.length > maxLen) {
                maxLen = currWord.length;
                largeWord = currWord;
            }
            currWord = "";
        } else {
            currWord += currChar;
        }
    }
    return largeWord;
}

let str: string = "Hello Samiran";
console.log(`Largest word is: ${findLargestWord(str)}`);

export { };