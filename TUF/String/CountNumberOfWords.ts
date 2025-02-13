function countNumberOfWords(str: string): number {
    let count: number = 1;
    for(const char of str) {
        if(char == ' '){
            count++;
        }
    }
    return count;
}

let str: string = "Hello World";
console.log(countNumberOfWords(str));

export {};
