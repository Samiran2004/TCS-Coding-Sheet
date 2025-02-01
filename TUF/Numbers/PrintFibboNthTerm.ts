function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        let last: number = fibonacci(n - 1);
        let slast: number = fibonacci(n - 2);
        return last + slast;
    }
}

let n: number = 6;
console.log(fibonacci(n));

export { };