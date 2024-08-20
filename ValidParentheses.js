const parenTheses = "({(})";
let stack = [];

function validParentheses(parenTheses) {
    for (let i = 0; i < parenTheses.length; i++) {
        if (parenTheses.charAt(i) == '(' || parenTheses.charAt(i) == '{' || parenTheses.charAt(i) == '[') {
            stack.push(parenTheses.charAt(i));
        }
        if (parenTheses.charAt(i) == ')' || parenTheses.charAt(i) == '}' || parenTheses.charAt(i) == ']') {
            if (stack.length == 0) {
                return false;
            }
            if (!isMatch(stack.pop(), parenTheses.charAt(i))) {
                return false;
            }
        }
    }
    return stack.length == 0;
}

function isMatch(first, second) {
    return (first == '(' && second == ')' || first == '{' && second == '}' || first == '[' && second == ']');
}

console.log(validParentheses(parenTheses));