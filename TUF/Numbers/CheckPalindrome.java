import java.util.Scanner;

public class CheckPalindrome {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number to check: ");
        int num = input.nextInt();
        input.close();
        boolean result = checkIsPalindrome(num);
        if (result == true) {
            System.out.println("The number is palindrome.");
        } else {
            System.out.println("The number is not palindrome.");
        }
    }

    private static boolean checkIsPalindrome(int num) {
        int rev = 0;
        int dup = num;
        while (num > 0) {
            int rem = num % 10;
            rev = (rev * 10) + rem;
            num = num / 10;
            ;
        }
        return dup == rev ? true : false;
    }
}