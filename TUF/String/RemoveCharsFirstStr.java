import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class RemoveCharsFirstStr {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the 1st string: ");
        String str1 = input.next();
        System.out.print("Enter the 2nd string: ");
        String str2 = input.next();
        input.close();
        System.out.println(removeCharsFromFirst(str1, str2));
    }

    private static String removeCharsFromFirst(String str1, String str2) {
        StringBuilder newString = new StringBuilder();
        Set<Character> set = new HashSet<>();
        for (int i = 0; i < str2.length(); i++) {
            if (!set.contains(str2.charAt(i))) {
                set.add(str2.charAt(i));
            }
        }
        for (int i = 0; i < str1.length(); i++) {
            char currChar = str1.charAt(i);
            if (!set.contains(currChar)) {
                newString.append(currChar);
            }
        }
        return newString.toString();
    }
}
