import java.util.Scanner;

public class Remove_Brackets {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the expression: ");
        String exp = input.nextLine();
        input.close();
        System.out.println("Before remove all brackets: " + exp);
        System.out.println("After remove all brackets: " + removeBrackets(exp));
    }

    private static String removeBrackets(String exp) {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < exp.length(); i++) {
            char currChar = exp.charAt(i);
            if (currChar == '(' || currChar == ')') {
                continue;
            }
            builder.append(currChar);
        }
        return builder.toString();
    }
}