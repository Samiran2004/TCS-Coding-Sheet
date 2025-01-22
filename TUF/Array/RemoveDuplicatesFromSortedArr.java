import java.util.Scanner;

public class RemoveDuplicatesFromSortedArr {
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
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
        int newSize = removeDuplicatesFromSortedArray(arr);
        for (int i = 0; i < newSize; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    private static int removeDuplicatesFromSortedArray(int[] arr) {
        if (arr.length == 0)
            return 0;
        int j = 0;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[j]) {
                j++;
                arr[j] = arr[i];
            }
        }
        return j + 1;
    }
}