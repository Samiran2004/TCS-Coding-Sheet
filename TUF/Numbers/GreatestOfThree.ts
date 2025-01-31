function findGreatestAmongThree(num1: number, num2: number, num3: number): number {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

let num1: number = 4;
let num2: number = 3;
let num3: number = 6;
console.log(findGreatestAmongThree(num1, num2, num3));

export { };