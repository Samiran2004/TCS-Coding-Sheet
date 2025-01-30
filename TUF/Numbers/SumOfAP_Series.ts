function findSumOfAP(n: number, a: number, d: number): number {
    let sum: number = 0;
    let currNum: number = a;
    for (let i: number = 0; i < n; i++) {
        sum += currNum;
        currNum += d;
    }
    return sum;
}

function findSumOfAP_Formula(n:number, a: number, d: number): number {
    return ((Math.floor(n/2)) * (2 * a + (n - 1) * d));
}

let n: number = 8;
let a: number = -2;
let d: number = 5;
console.log(findSumOfAP(n, a, d));
console.log(findSumOfAP_Formula(n, a, d));

export { };