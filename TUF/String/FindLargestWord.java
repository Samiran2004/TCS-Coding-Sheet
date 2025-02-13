import java.util.Scanner;

public class FindLargestWord {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.nextLine();
        input.close();
        System.out.println(findLargestWord(str));
    }

    private static String findLargestWord(String str) {
        int maxLen = 0;
        String largeWord = "";
        String currWord = "";

        for (int i = 0; i < str.length(); i++) {
            char currChar = str.charAt(i);
            if (currChar == ' ' || i == str.length() - 1) {
                if (i == str.length() - 1) {
                    currWord += currChar;
                }
                if (currWord.length() > maxLen) {
                    maxLen = currWord.length();
                    largeWord = currWord;
                }
                currWord = "";
            } else {
                currWord += currChar;
            }
        }
        return largeWord;
    }
}
