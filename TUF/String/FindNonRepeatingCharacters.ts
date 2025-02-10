function findNonRepeatingChars(str: string): string[] {
    const charCounts = new Map<string, number>();

    for (const char of str) {
        charCounts.set(char, (charCounts.get(char) || 0) + 1);
    }

    const nonRepeatingChars: string[] = [];

    for (const char of str) {
        if (charCounts.get(char) === 1) {
            nonRepeatingChars.push(char);
        }
    }

    return nonRepeatingChars;
}

let str: string = "google";
const result = findNonRepeatingChars(str);
console.log(result);

str = "";
const result2 = findNonRepeatingChars(str);
console.log(result2);

str = "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz";
const result3 = findNonRepeatingChars(str);
console.log(result3);

str = "aabbc";
const result4 = findNonRepeatingChars(str);
console.log(result4);


export { };