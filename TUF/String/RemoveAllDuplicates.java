import java.util.Scanner;

public class RemoveAllDuplicates {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.next();
        input.close();
        System.out.println("Before remove all duplicates: " + str);
        System.out.println("After remove all duplicates: " + removeDuplicates(str));
    }

    private static String removeDuplicates(String str) {
        String ans = "";
        boolean map[] = new boolean[26];
        for(int i = 0; i<str.length(); i++) {
            if(map[str.charAt(i) - 'a'] == false) {
                ans += str.charAt(i);
                map[str.charAt(i) - 'a'] = true;
            }
        }
        return ans;
    }
}
