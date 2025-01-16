import java.util.Arrays;
import java.util.Scanner;

public class RearrangeArray {
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
        rearrangeArray(arr);
    }

    private static void rearrangeArray(int[] arr) {
        Arrays.sort(arr);
        for (int i = 0; i < arr.length / 2; i++) {
            System.out.println(arr[i] + " ");
        }
        for (int i = arr.length - 1; i >= arr.length / 2; i--) {
            System.out.println(arr[i] + " ");
        }
    }
}
