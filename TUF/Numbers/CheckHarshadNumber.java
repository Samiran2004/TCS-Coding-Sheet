import java.util.Scanner;

public class CheckHarshadNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number to check: ");
        int num = input.nextInt();
        input.close();
        System.out.println(checkIsHarsadNumber(num));
    }

    private static boolean checkIsHarsadNumber(int num) {
        int sum = 0;
        int dupNum = num;
        while (num != 0) {
            int rem = num % 10;
            sum += rem;
            num = num / 10;
        }
        return dupNum % sum == 0;
    }
}
