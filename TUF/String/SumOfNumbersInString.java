import java.util.Scanner;

public class SumOfNumbersInString {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.next();
        input.close();
        System.out.println("The string: " + str);
        System.out.println("The sum: " + sumOfNumbersInString(str));
    }

    private static int sumOfNumbersInString(String str) {
        String tempSum = "0";
        int sum = 0;
        for (int i = 0; i < str.length(); i++) {
            char currChar = str.charAt(i);
            if (Character.isDigit(currChar)) {
                tempSum += currChar;
            } else {
                sum += Integer.parseInt(tempSum);
                tempSum = "0";
            }
        }
        return sum + Integer.parseInt(tempSum);
    }
}
