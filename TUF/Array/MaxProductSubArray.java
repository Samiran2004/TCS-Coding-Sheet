import java.util.Scanner;

public class MaxProductSubArray {
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
        System.out.println("Maximum Product Subarray in an Array: " + maxProductSubArray(arr));
    }

    // private static int maxProductSubArray(int[] arr) {
    // int result = 0;
    // for (int i = 0; i < arr.length - 1; i++) {
    // for (int j = i + 1; j < arr.length; j++) {
    // int prod = 1;
    // for (int k = i; k < j; k++) {
    // prod *= arr[k];
    // }
    // result = Math.max(result, prod);
    // }
    // }
    // return result;
    // }

    private static int maxProductSubArray(int[] arr) {
        int prod1 = arr[0], prod2 = arr[0], result = arr[0];

        for (int i = 1; i < arr.length; i++) {
            int temp = Math.max(arr[i], Math.max(prod1 * arr[i], prod2 * arr[i]));
            prod2 = Math.min(arr[i], Math.min(prod1 * arr[i], prod2 * arr[i]));
            prod1 = temp;
            result = Math.max(result, prod1);
        }
        return result;
    }
}
