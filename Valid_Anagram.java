import java.util.Arrays;
import java.util.Scanner;

public class Valid_Anagram {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter 1st string: ");
        String str1 = input.next();
        System.out.print("Enter 2nd string: ");
        String str2 = input.next();
        input.close();
        System.out.println(isValidAnagram(str1, str2));
    }
    private static boolean isValidAnagram(String s1, String s2){
        if (s1.length() != s2.length()) {
            return false;
        }
        char[] s1CharArr = s1.toCharArray();
        char[] s2CharArr = s2.toCharArray();
        Arrays.sort(s1CharArr);
        Arrays.sort(s2CharArr);
        return Arrays.equals(s1CharArr, s2CharArr);
    }
}
