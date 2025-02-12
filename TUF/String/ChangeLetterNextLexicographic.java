import java.util.Scanner;

public class ChangeLetterNextLexicographic {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.next();
        input.close();
        System.out.println("Before: " + str);
        System.out.println("After: " + changeNextLexicographic(str));
    }

    private static String changeNextLexicographic(String str) {
        StringBuilder newString = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char currChar = str.charAt(i);
            int ascii = (int) currChar;
            if ((ascii >= 60 && ascii < 90) || (ascii >= 97 && ascii < 122)) {
                newString.append((char) (ascii + 1));
            } else if (ascii == 90) {
                newString.append((char) (65));
            } else if (ascii == 122) {
                newString.append((char) (97));
            }
        }
        return newString.toString();
    }
}