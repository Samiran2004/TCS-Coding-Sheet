import java.util.Scanner;

public class PrintFibboNthTerm {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the nth term value: ");
        int n = input.nextInt();
        input.close();
        System.out.println(fibonacci(n));
    }

    private static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        } else {
            int last = fibonacci(n - 1);
            int slast = fibonacci(n - 2);
            return last + slast;
        }
    }
}
