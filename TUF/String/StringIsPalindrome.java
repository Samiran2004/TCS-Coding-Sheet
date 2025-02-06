import java.util.Scanner;

public class StringIsPalindrome {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a string to check: ");
        String str = input.next();
        input.close();
        System.out.println(str + " is a palindrome string: " + checkIsPalindromString(str));
        System.out.println(str + " is a palindrome string: " + checkIsPalindromString0Sp(str));
    }

    private static boolean checkIsPalindromString(String str) {
        str.toLowerCase();
        StringBuilder revString = new StringBuilder();
        for (int i = str.length() - 1; i >= 0; i--) {
            revString.append(str.charAt(i));
        }
        return revString.toString().equals(str);
    }

    private static boolean checkIsPalindromString0Sp(String str) {
        int i = 0, j= str.length()-1;
        while (i<=j) {
            if(str.charAt(i) != str.charAt(j)) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}