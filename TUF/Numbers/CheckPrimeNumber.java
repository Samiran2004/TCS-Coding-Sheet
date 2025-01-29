import java.util.Scanner;

public class CheckPrimeNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number to check: ");
        int num = input.nextInt();
        input.close();
        System.out.printf("%d is a prime number: %s", num, checkPrime(num));
        System.out.println();
    }

    private static boolean checkPrime(int num) {
        int count = 0;
        for (int i = 1; i <= num; i++) {
            if (num % i == 0) {
                count++;
            }
        }
        if (count == 2) {
            return true;
        } else {
            return false;
        }
    }
}