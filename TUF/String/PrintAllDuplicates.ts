function printAllDuplicates(str: string): void {
    const map = new Map<string, number>();
    for (const char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (const [key, value] of map) {
        if (value > 1) {
            console.log(`${key} --> ${value}`);
        }
    }
}

let str: string = "sinstriiintng";
printAllDuplicates(str);

export { };