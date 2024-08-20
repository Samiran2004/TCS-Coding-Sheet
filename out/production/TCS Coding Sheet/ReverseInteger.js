// const num = 6778;
const num = -6778;
console.log(`Before reversing: ${num}`);
console.log(`After reversing: ${reverseInteger(num)}`);

function reverseInteger(num) {
    let revNum = 0, temp = num;
    const MIN_INT = -2147483648, MAX_INT = 2147483647;
    while (temp != 0) {
        let rem = temp % 10;
        temp = Math.trunc(temp / 10);
        if (revNum > MAX_INT / 10) return 0;
        if (revNum < MIN_INT / 10) return 0;
        revNum = revNum * 10 + rem;
    }
    if (revNum < 0) {
        return -Math.abs(revNum);
    }
    return revNum;
}