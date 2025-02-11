function findMaxOccuringChar(str: string): string {
    if (str.length == 0) {
        throw new Error("Length should be greater than 0");
    }

    let strArr: string[] = [];
    for (const char of str) {
        strArr.push(char);
    }

    strArr.sort();
    let count: number = 0;
    let maxOccuringChar = "";
    for (let i: number = 0; i < strArr.length; i++) {
        let tempCount: number = 0;
        let j = i + 1;
        while (strArr[j] == strArr[i]) {
            tempCount++;
            j++;
        }
        if (count < tempCount) {
            count = tempCount;
            maxOccuringChar = strArr[i];
        }
        tempCount = 0;
    }
    return maxOccuringChar;
}

console.log(findMaxOccuringChar("takeuforward"));
console.log(findMaxOccuringChar("apple"));

function generateString(length: number): string {
    if (length <= 0) {
        return "";
    }

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Characters to use
    const charactersLength = characters.length;
    let result = "";

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const longString = generateString(2000000);
console.log(findMaxOccuringChar(longString));


export { };