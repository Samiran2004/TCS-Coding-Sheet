import java.util.Scanner;

public class CheckEvenOrOddNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number to check: ");
        int number = input.nextInt();
        input.close();
        System.out.println("The number is: " + checkEvenOrOdd(number));
    }

    private static String checkEvenOrOdd(int num) {
        if (num % 2 == 0) {
            return "Even";
        } else {
            return "Odd";
        }
    }
}