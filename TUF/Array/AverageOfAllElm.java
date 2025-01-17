import java.util.Scanner;

public class AverageOfAllElm {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            System.out.printf("Enter %d number element of the array: ", i + 1);
            arr[i] = input.nextInt();
        }
        input.close();
        System.out.println("Average of all elements: " + findAvgOfAllElm(arr));
    }

    private static double findAvgOfAllElm(int[] arr) {
        double sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += (double) arr[i];
        }
        return sum / arr.length;
    }
}
