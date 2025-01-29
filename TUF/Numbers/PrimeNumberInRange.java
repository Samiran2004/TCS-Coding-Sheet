import java.util.ArrayList;
import java.util.Scanner;

public class PrimeNumberInRange {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the start range: ");
        int startRange = input.nextInt();
        System.out.print("Enter the end range: ");
        int endRange = input.nextInt();
        input.close();
        findPrimeNumbers(startRange, endRange);
    }

    private static void findPrimeNumbers(int start, int end) {
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = start; i <= end; i++) {
            if (checkIsPrime(i)) {
                list.add(i);
            }
        }
        print(list);
    }

    private static boolean checkIsPrime(int num) {
        int count = 0;
        for (int i = 1; i <= num; i++) {
            if (num % i == 0) {
                count++;
            }
        }
        if (count == 2) {
            return true;
        } else {
            return false;
        }
    }

    private static void print(ArrayList<Integer> list) {
        for (int i = 0; i < list.size(); i++) {
            System.out.print(list.get(i) + ", ");
        }
    }
}
