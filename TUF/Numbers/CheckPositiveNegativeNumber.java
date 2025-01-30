import java.util.Scanner;

public class CheckPositiveNegativeNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number to checke: ");
        int num = input.nextInt();
        input.close();
        System.out.println("The number is: "+ checkPositiveNegative(num));
    }

    private static String checkPositiveNegative(int num) {
        return num > 0 ? "Positive": "Negative";
    }
}