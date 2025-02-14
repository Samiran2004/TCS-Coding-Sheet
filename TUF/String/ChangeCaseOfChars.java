import java.util.Scanner;

public class ChangeCaseOfChars {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.nextLine();
        input.close();
        System.out.println("Before: " + str);
        System.out.println("After: " + changeCase(str));
    }

    private static String changeCase(String str) {
        StringBuilder newString = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            int currCharAscii = (int) (str.charAt(i));
            if ((currCharAscii >= 65 && currCharAscii <= 90)) {
                newString.append((char) (currCharAscii + 32));
            } else if ((currCharAscii >= 97 && currCharAscii <= 122)) {
                newString.append((char) (currCharAscii - 32));
            }else{
                newString.append(str.charAt(i));
            }
        }
        return newString.toString();
    }
}
