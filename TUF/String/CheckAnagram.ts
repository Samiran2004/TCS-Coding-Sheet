function checkStringAnagram(str1: string, str2: string): boolean {
    let map = new Map<string, number>();
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i: number = 0; i < str1.length; i++) {
        let currChar: string = str1.charAt(i);
        map.set(currChar, (map.get(currChar) || 0) + 1);
    }
    for (let i: number = 0; i < str2.length; i++) {
        let currChar: string = str2.charAt(i);
        map.set(currChar, (map.get(currChar) || 0) + 1);
    }
    for (let [key, value] of map.entries()) {
        if (value % 2 !== 0) {
            return false;
        }
    }
    return true;
}

let str1: string = "CAT";
let str2: string = "ACT";
console.log(checkStringAnagram(str1, str2));

export { };