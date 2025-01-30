import java.util.Scanner;

public class SumOfAP_Series {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the value of n: ");
        int n = input.nextInt();
        System.out.print("Enter the value of a: ");
        int a = input.nextInt();
        System.out.print("Enter the value of d: ");
        int d = input.nextInt();
        input.close();
        System.out.println(findSumOfAP(n, a, d));
        System.out.println(findSumOfAPFormula(n, a, d));
    }

    private static int findSumOfAP(int n, int a, int d) {
        int sum = 0;
        int currNum = a;
        for (int i = 0; i < n; i++) {
            sum += currNum;
            currNum += d;
        }
        return sum;
    }

    private static int findSumOfAPFormula(int n, int a, int d) {
        return (n / 2 * (2 * a + (n - 1) * d));
    }
}