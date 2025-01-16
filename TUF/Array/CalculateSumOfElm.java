import java.util.Scanner;
import java.util.stream.IntStream;

public class CalculateSumOfElm {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            System.out.printf("Enter %d number element of the array: ", i + 1);
            arr[i] = input.nextInt();
        }
        System.out.print("Enter the number element to calculate sum: ");
        int elm = input.nextInt();
        input.close();
        System.out.println(calculateSumOfElements(arr, elm));
    }

    private static int calculateSumOfElements(int[] arr, int elm) {
        int result = 0;
        if (elm == arr.length) {
            result = IntStream.of(arr).sum();
        } else {
            for (int i = 0; i < elm; i++) {
                result += arr[i];
            }
        }
        return result;
    }
}
