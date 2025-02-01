function checkIsLeapYear(year: number): boolean {
    if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0) {
        return true;
    } else {
        return false;
    }
}

let year: number = 2001;
console.log(`${year} is a leapyear: ${checkIsLeapYear(year)}`);

export { };