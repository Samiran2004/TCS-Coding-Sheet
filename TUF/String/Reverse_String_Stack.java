import java.util.Scanner;
import java.util.Stack;

public class Reverse_String_Stack {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = input.next();
        input.close();
        System.out.println("Before reverse the string: " + str);
        System.out.println("After reverse the string: " + reverseString(str));
    }

    private static String reverseString(String str) {
        Stack<Character> stack = new Stack<>();
        String newStr = "";
        for (int i = 0; i < str.length(); i++) {
            char currChar = str.charAt(i);
            stack.push(currChar);
        }
        while (!stack.isEmpty()) {
            newStr += stack.pop();
        }
        return newStr;
    }
}
