import java.util.Scanner;

public class SumOfGP_Series {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the value of a: ");
        double a = input.nextDouble();
        System.out.print("Enter the value of r: ");
        double r = input.nextDouble();
        System.out.print("Enter the value of n: ");
        int n = input.nextInt();
        input.close();
        System.out.println(SumOfGP(a, r, n));
    }

    private static double SumOfGP(double a, double r, double n) {
        double sum = 0.0;
        for(int i = 0; i<n; i++) {
            sum += a;
            a = a * r;
        }
        return sum;
    }
}