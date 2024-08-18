import java.util.Scanner;
import java.util.Stack;

public class ValidParenthesis {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the parentheses strings: ");
        String parenthesesStr = input.next();
        System.out.println(isValidParentheses(parenthesesStr));
    }

    public static boolean isValidParentheses(String str) {
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == '(' || str.charAt(i) == '{' || str.charAt(i) == '[') {
                stack.push(str.charAt(i));
            }
            if (str.charAt(i) == ')' || str.charAt(i) == '}' || str.charAt(i) == ']') {
                if (stack.isEmpty()) {
                    return false;
                }
                char closeStr = stack.pop();
                if (!isMatchPair(closeStr, str.charAt(i))) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }

    public static boolean isMatchPair(char first, char second) {
        return (first == '(' && second == ')') || (first == '{' && second == '}') || (first == '[' && second == ']');
    }
}
