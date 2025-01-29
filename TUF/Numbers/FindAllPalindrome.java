import java.util.ArrayList;
import java.util.Scanner;

public class FindAllPalindrome {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the min range: ");
        int minRange = input.nextInt();
        System.out.print("Enter the max range: ");
        int maxRange = input.nextInt();
        input.close();
        findAllPalindromeNumbers(minRange, maxRange);
    }

    private static void findAllPalindromeNumbers(int min, int max) {
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = min; i <= max; i++) {
            if (checkPalindrome(i)) {
                list.add(i);
            }
        }
        printList(list);
    }

    private static boolean checkPalindrome(int num) {
        int rev = 0;
        int dup = num;
        while (num > 0) {
            int rem = num % 10;
            rev = (rev * 10) + rem;
            num = num / 10;
        }
        return dup == rev ? true : false;
    }

    private static void printList(ArrayList<Integer> list) {
        for (int i = 0; i < list.size(); i++) {
            System.out.print(list.get(i) + ", ");
        }
    }
}
