function sumOfNumbersInString(str: string): number {
    let tempSum: string = "0";
    let sum: number = 0;
    for (let i: number = 0; i < str.length; i++) {
        let currChar: string = str.charAt(i);
        if(currChar >= "0" && currChar <= "9") {
            tempSum += currChar;
        }else{
            sum += Number(tempSum);
            tempSum = "0";
        }
    }
    return sum + Number.parseInt(tempSum);
}

let str: string = "1xyz23";
console.log(`The string: ${str}`);
console.log(`The sum: ${sumOfNumbersInString(str)}`);

export { };