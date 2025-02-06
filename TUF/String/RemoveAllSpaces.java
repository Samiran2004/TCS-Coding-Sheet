import java.util.Scanner;

public class RemoveAllSpaces {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.nextLine();
        input.close();
        System.out.println("Before remove all spaces the string is: " + str);
        System.out.println("After remove all spaces the string is: " + removeSpaces(str));
    }

    private static String removeSpaces(String str) {
        StringBuilder newString = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char currChar = str.charAt(i);
            if (currChar == ' ') {
                continue;
            }
            newString.append(currChar);
        }
        return newString.toString();
    }
}