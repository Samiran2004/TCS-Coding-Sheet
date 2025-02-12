function removeCharsFromFirst(str1: string, str2: string): string {
    let set = new Set<string>();
    let ans: string = "";
    for (const char of str2) {
        if (!set.has(char)) {
            set.add(char);
        }
    }

    for (const char of str1) {
        if (!set.has(char)) {
            ans += char;
        }
    }

    return ans;
}

let str1: string = "abcdef";
let str2: string = "cefz";
console.log(removeCharsFromFirst(str1, str2));

export { };