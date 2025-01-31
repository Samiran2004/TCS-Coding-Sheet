function SumOfGP(a: number, r: number, n: number): number {
    let sum: number = 0.0;
    for (let i: number = 0; i < n; i++) {
        sum += a;
        a = a * r;
    }
    return sum;
}

let a: number = 2.0;
let r: number = 1.5;
let n: number = 4;
console.log(SumOfGP(a, r, n));

export { };