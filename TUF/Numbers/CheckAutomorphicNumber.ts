function isAutomorphicNumber(num: number): boolean {
    let finalNum: number = num * num;
    return findLastDigit(finalNum) == findLastDigit(num);
}

function findLastDigit(num: number): number {
    return num % 10;
}

let num: number = 76;
console.log(`${num} is an automorphic number: ${isAutomorphicNumber(num) ? "Yes" : "No"}`);

export { };