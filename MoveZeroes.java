import java.util.Arrays;
import java.util.Scanner;

public class MoveZeroes {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            System.out.print("Enter the element: ");
            arr[i] = input.nextInt();
        }
        input.close();
        moveZeroes(arr);
        System.out.println(Arrays.toString(arr));
    }

    public static void moveZeroes(int[] arr) {
        int lastIdx = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                arr[lastIdx++] = arr[i];
            }
        }
        for (int i = lastIdx; i < arr.length; i++) {
            arr[i] = 0;
        }
    }
}
