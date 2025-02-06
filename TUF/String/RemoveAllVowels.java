import java.util.Scanner;

public class RemoveAllVowels {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = input.nextLine();
        input.close();
        System.out.println("Before remove all vowels the string is: " + str);
        String neString = removeAllVowels(str);
        System.out.println("After remove all vowels the string is: " + neString);
    }

    private static String removeAllVowels(String str) {
        StringBuilder newStr = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char currChar = str.charAt(i);
            if (isVowel(currChar)) {
                continue;
            } else {
                newStr.append(currChar);
            }
        }
        return newStr.toString();
    }

    private static boolean isVowel(char currChar) {
        if (currChar == 'a' || currChar == 'e' || currChar == 'i' || currChar == 'o' || currChar == 'u') {
            return true;
        }
        return false;
    }
}