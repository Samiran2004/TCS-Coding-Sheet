import java.util.Scanner;

public class GreatestOfThree {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        int firstNum = input.nextInt();
        System.out.print("Enter the second number: ");
        int secondNum = input.nextInt();
        System.out.print("Enter the third number: ");
        int thirdNum = input.nextInt();
        input.close();
        System.out.println(findGreatestAmongThree(firstNum, secondNum, thirdNum));
    }

    private static int findGreatestAmongThree(int num1, int num2, int num3) {
        if (num1 > num2 && num1 > num3) {
            return num1;
        } else if (num2 > num1 && num2 > num3) {
            return num2;
        } else {
            return num3;
        }
    }
}