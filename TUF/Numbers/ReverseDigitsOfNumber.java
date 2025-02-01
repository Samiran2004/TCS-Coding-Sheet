import java.util.Scanner;

public class ReverseDigitsOfNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = input.nextInt();
        System.out.println(num + " reverse is: " + reverseNumber(num));
        input.close();
    }

    private static int reverseNumber(int num) {
        if (num <= 10) {
            return num;
        } else {
            int revNum = 0;
            while (num != 0) {
                int rem = num % 10;
                revNum = revNum * 10 + rem;
                num = num / 10;
            }
            return revNum;
        }
    }
}
