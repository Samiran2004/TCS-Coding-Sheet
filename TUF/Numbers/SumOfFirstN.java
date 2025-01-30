import java.util.Scanner;

public class SumOfFirstN {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the range: ");
        int range = input.nextInt();
        input.close();
        System.out.printf("Sum of %d to %d is: %d", 0, range, findSumOfFirstN(range));
        System.out.println();

        //Using formula...
        int result = range * (range + 1) / 2;
        System.out.println("Using Formula: "+ result);
    }

    private static int findSumOfFirstN(int n) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
}
