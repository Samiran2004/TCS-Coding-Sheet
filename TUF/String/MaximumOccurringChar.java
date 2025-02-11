import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class MaximumOccurringChar {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.next();
        input.close();
        System.out.println(findMaxOccuringChar(str));
    }

    private static char findMaxOccuringChar(String str) {
        if (str.length() == 0) {
            throw new Error("Length should be greater than 0");
        }
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < str.length(); i++) {
            char currChar = str.charAt(i);
            map.put(currChar, map.getOrDefault(currChar, 0) + 1);
        }

        int count = Integer.MIN_VALUE;
        char maxOccurrChar = str.charAt(0);
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() > count) {
                count = entry.getValue();
                maxOccurrChar = entry.getKey();
            }
        }
        return maxOccurrChar;
    }
}
