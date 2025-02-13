import java.util.Arrays;
import java.util.Scanner;

public class SortCharsString {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.next();
        input.close();
        System.out.println("Before: " + str);
        System.out.println("After: " + sortChars(str));
    }

    private static String sortChars(String str) {
        char[] charArr = str.toCharArray();
        Arrays.sort(charArr);
        String ans = new String(charArr);
        return ans;
    }
}
