import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CheckAnagram {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the 1st string: ");
        String firstStr = input.next();
        System.out.print("Enter the 2nd string: ");
        String secondStr = input.next();
        input.close();
        System.out.println(firstStr + " and " + secondStr + " are anagram: " + checkStringAnagram(firstStr, secondStr));
    }

    private static boolean checkStringAnagram(String str1, String str2) {
        Map<Character, Integer> map = new HashMap<>();
        if (str1.length() != str2.length()) {
            return false;
        }
        for (int i = 0; i < str1.length(); i++) {
            char currChar = str1.charAt(i);
            map.put(currChar, map.getOrDefault(currChar, 0) + 1);
        }
        for (int i = 0; i < str2.length(); i++) {
            char currChar = str2.charAt(i);
            map.put(currChar, map.getOrDefault(currChar, 0) + 1);
        }
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() % 2 != 0) {
                return false;
            }
        }
        return true;
    }
}
