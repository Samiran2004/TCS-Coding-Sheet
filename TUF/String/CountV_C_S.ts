function countvowels_consonants_Spaces(str: string): void {
    let countV: number = 0, countS: number = 0, countC: number = 0;
    for (let i: number = 0; i < str.length; i++) {
        let currChar: string = str.charAt(i);
        if (currChar == 'a' || currChar == 'e' || currChar == 'i' || currChar == 'o' || currChar == 'u') {
            countV++;
        } else if (currChar == ' ') {
            countS++;
        } else {
            countC++;
        }
    }
    console.log(`Number of vowels in ${str} is: ${countV}`);
    console.log(`Number of consonants in ${str} is: ${countC}`);
    console.log(`Number of spaces in ${str} is: ${countS}`);
}

let str: string = "Take u forward is Awesome";
countvowels_consonants_Spaces(str.toLocaleLowerCase());

export { };