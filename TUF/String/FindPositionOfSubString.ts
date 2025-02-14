function findSubStringPosition(str: string, subStr: string): number {
    let strLen: number = str.length;
    let subStrLen: number = subStr.length;
    if (strLen < subStrLen) {
        throw new Error("Please enter a valid sub string...");
    } else {
        for (let i: number = 0; i < strLen; i++) {
            let temp: number = i;
            let j: number = 0;
            for (j = 0; j < subStrLen; j++) {
                if (str.charAt(temp) !== subStr.charAt(j)) {
                    break;
                }
                temp++;
            }
            if (j == subStrLen) {
                return i;
            }
        }
        return -1;
    }
}

let str: string = "takeuforward";
let subStr: string = "forward";
console.log(findSubStringPosition(str, subStr));

export { };