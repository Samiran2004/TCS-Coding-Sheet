import java.util.Scanner;

public class GreaterOfTwo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        int firstNum = input.nextInt();
        System.out.print("Enter the second number: ");
        int secondNum = input.nextInt();
        input.close();
        System.out.println(findGreatest(firstNum, secondNum));
    }

    private static int findGreatest(int num1, int num2) {
        return num1 > num2 ? num1 : num2;
    }
}
