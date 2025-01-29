import java.util.Scanner;

public class CheckPerfectNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number to check: ");
        int num = input.nextInt();
        input.close();
        System.out.printf("%d is a perfect number: %s", num, checkPerfectNumber(num));
        System.out.println();
    }

    private static boolean checkPerfectNumber(int num) {
        int sum = 0;
        for (int i = 1; i <= num - 1; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }
        return sum == num ? true : false;
    }
}