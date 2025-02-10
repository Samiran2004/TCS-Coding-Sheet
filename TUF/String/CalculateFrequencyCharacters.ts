function calculateFrequency(str: string): void {
    let map = new Map<string, number>();
    for (let i: number = 0; i < str.length; i++) {
        let currChar: string = str.charAt(i);
        map.set(currChar, (map.get(currChar) || 0) + 1);
    }

    for (let [Key, value] of map.entries()) {
        console.log(`${Key}: ${value}`);
    }
}

let str: string = "takeuforward";
calculateFrequency(str);

export { };