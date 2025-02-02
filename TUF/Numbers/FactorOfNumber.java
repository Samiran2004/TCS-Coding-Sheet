import java.util.ArrayList;
import java.util.Scanner;

public class FactorOfNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = input.nextInt();
        input.close();
        findFactors(num);
    }

    private static void findFactors(int num) {
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 1; i <= num; i++) {
            if (num % i == 0) {
                list.add(i);
            }
        }
        // Print the result...
        for (int i = 0; i < list.size(); i++) {
            System.out.print(list.get(i) + " ,");
        }
    }
}
