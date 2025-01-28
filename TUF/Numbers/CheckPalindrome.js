function checkIsPalindrome(num) {
    var rev = 0;
    var dup = num;
    while (num > 0) {
        var rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);
    }
    return dup === rev ? true : false;
}
var num = 4554;
var result = checkIsPalindrome(num);
if (result == true) {
    console.log("".concat(num, " is a palindrome number."));
}
else {
    console.log("".concat(num, " is not a palindrome number."));
}
