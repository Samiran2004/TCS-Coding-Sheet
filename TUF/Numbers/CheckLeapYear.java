import java.util.Scanner;

public class CheckLeapYear {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the year to check: ");
        int year = input.nextInt();
        input.close();
        System.out.println(year + " is a leap year: " + checkIsLeapYear(year));
    }

    private static boolean checkIsLeapYear(int year) {
        if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
            return true;
        } else {
            return false;
        }
    }
}
