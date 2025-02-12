import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class PrintAllDuplicates {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.next();
        input.close();
        printAllDuplicates(str);
    }

    private static void printAllDuplicates(String str) {
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < str.length(); i++) {
            char currChar = str.charAt(i);
            map.put(currChar, map.getOrDefault(currChar, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() <= 1) {
                continue;
            }
            System.out.println(entry.getKey() + " --> " + entry.getValue());
        }
    }
}
