import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class FindNonRepeatingCharacters {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.next();
        input.close();
        findNonRepeatingChars(str);
    }

    private static void findNonRepeatingChars(String str) {
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < str.length(); i++) {
            char currChar = str.charAt(i);
            if (map.containsKey(currChar)) {
                map.remove(currChar);
                continue;
            }
            map.put(currChar, map.getOrDefault(currChar, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            System.out.print(entry.getKey() + " ");
        }
    }
}
