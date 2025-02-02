import java.util.Scanner;

public class CheckAutomorphicNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number to check: ");
        int num = input.nextInt();
        input.close();
        System.out.println(isAutomorphicNumber(num));
    }

    private static boolean isAutomorphicNumber(int num) {
        int finalNum = num * num;
        return findLastDigit(finalNum) == findLastDigit(num);
    }

    private static int findLastDigit(int num) {
        return num % 10;
    }
}
