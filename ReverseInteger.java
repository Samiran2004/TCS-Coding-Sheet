import java.util.Scanner;

public class ReverseInteger {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the integer: ");
        int integer = input.nextInt();
        System.out.println("Before reversing: " + integer);
        System.out.println("After reversing: " + revereInt(integer));
        input.close();
    }

    public static int revereInt(int num) {
        int revNum = 0;
        while (num != 0) {
            int rem = num % 10;
            if (revNum > Integer.MAX_VALUE / 10)
                return 0;
            if (revNum < Integer.MIN_VALUE / 10)
                return 0;
            revNum = revNum * 10 + rem;
            num /= 10;
        }
        if (revNum < 0) {
            return -Math.abs(revNum);
        }
        return revNum;
    }
}
