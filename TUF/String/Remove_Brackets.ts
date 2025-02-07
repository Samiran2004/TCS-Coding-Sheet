function removeBrackets(exp: string): string {
    let newExp = "";
    for (let i: number = 0; i < exp.length; i++) {
        let currChar: string = exp.charAt(i);
        if (currChar == '(' || currChar == ')') {
            continue;
        }
        newExp += currChar;
    }
    return newExp;
}

let exp: string = "(((a-b))+c)";
console.log(`Before remove all brackets: ${exp}`);
console.log(`After remove all brackets: ${removeBrackets(exp)}`);

export { };