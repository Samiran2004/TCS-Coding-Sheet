import java.util.Scanner;

public class FactorialOfNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number to find the factorial: ");
        int num = input.nextInt();
        input.close();
        System.out.printf("Factorial of %d is: %d\n", num, findFactorial(num));
    }

    private static int findFactorial(int num) {
        if (num == 0) {
            return 1;
        } else {
            return num * findFactorial(num - 1);
        }
    }
}
