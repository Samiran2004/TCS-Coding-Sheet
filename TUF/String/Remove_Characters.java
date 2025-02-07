import java.util.Scanner;

public class Remove_Characters {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.nextLine();
        input.close();
        System.out.println("Before remove all characters from a string except alphabets: " + str);
        System.out.println("After remove all characters from a string except alphabets: " + removeCharacters(str));
    }

    private static String removeCharacters(String str) {
        StringBuilder newString = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char currChar = str.charAt(i);
            if (isSpecialChar(currChar)) {
                continue;
            }else{
                newString.append(currChar);
            }
        }
        return newString.toString();
    }

    private static boolean isSpecialChar(char currChar) {
        int asciiVal = (int) currChar;
        if ((asciiVal >= 65 && asciiVal <= 90) || (asciiVal >= 97 && asciiVal <= 122)) {
            return false;
        }
        return true;
    }
}
