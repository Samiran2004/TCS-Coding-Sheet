import java.util.Scanner;

public class CheckArmstrongNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number to check: ");
        int num = input.nextInt();
        input.close();
        System.out.printf("%d is an armstrong number: %s", num, checkArmstrong(num));
        System.out.println();
    }

    private static boolean checkArmstrong(int num) {
        int sum = 0;
        int dup = num;
        while (num > 0) {
            int rem = num % 10;
            sum += (rem * rem * rem);
            num = num / 10;
        }
        return dup == sum ? true : false;
    }
}
