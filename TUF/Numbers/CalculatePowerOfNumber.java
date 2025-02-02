import java.util.Scanner;

public class CalculatePowerOfNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = input.nextInt();
        System.out.print("Enter the power: ");
        int pow = input.nextInt();
        input.close();
        System.out.printf("Result: %d\n", findPower(num, pow));
    }

    private static int findPower(int num, int pow) {
        if (pow == 0) {
            return 1;
        } else {
            return num * findPower(num, pow - 1);
        }
    }
}
