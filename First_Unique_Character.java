import java.util.*;

public class First_Unique_Character {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = input.next();
        input.close();
        System.out.println(firstUniqChar(str));
    }

    private static int firstUniqChar(String s) {
        for (int i = 0; i < s.length() - 1; i++) {
            char currChar = s.charAt(i);
            boolean isUnique = true;
            for (int j = 0; j < s.length(); j++) {
                if (i != j && currChar == s.charAt(j)) {
                    isUnique = false;
                    break;
                }
            }
            if (isUnique) {
                return i;
            }
        }
        return -1;
    }
}
