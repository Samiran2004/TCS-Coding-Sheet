import java.util.Scanner;

public class CheckStrongNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = input.nextInt();
        input.close();
        System.out.println(isStrongNumber(num));
    }

    private static boolean isStrongNumber(int num) {
        int sum = 0;
        int dupNum = num;
        while (num != 0) {
            int rem = num % 10;
            sum += findFactorial(rem);
            num = num / 10;
        }
        return sum == dupNum;
    }

    private static int findFactorial(int num) {
        if (num == 0) {
            return 1;
        } else {
            return num * findFactorial(num - 1);
        }
    }
}
