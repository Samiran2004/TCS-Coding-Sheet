import java.util.Scanner;

public class CountV_C_S {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.nextLine();
        input.close();
        countvowels_consonants_Spaces(str.toLowerCase());
    }

    private static void countvowels_consonants_Spaces(String str) {
        int countV = 0, countS = 0, countC = 0;
        for (int i = 0; i < str.length(); i++) {
            char currChar = str.charAt(i);
            if (currChar == 'a' || currChar == 'e' || currChar == 'i' || currChar == 'o' || currChar == 'u') {
                countV++;
            } else if (currChar == ' ') {
                countS++;
            } else {
                countC++;
            }
        }
        System.out.println("Number of vowels in the string: " + countV);
        System.out.println("Number of spaces in the string: " + countS);
        System.out.println("Number of consonants in the string: " + countC);
    }
}