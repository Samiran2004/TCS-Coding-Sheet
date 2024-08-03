import java.util.Scanner;

public class SearchRotatedSortedArray {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            System.out.print("Enter the element: ");
            arr[i] = input.nextInt();
        }
        System.out.print("Enter the key element: ");
        int key = input.nextInt();
        input.close();

        System.out.println(searchRotatedArray(arr, key));
    }

    public static int searchRotatedArray(int[] arr, int key) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (arr[mid] == key) {
                return mid;
            }
            if (arr[low] < arr[mid]) {
                if (arr[low] <= key && arr[mid] > key) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else {
                if (arr[high] > key && arr[mid] < key) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        return -1;
    }
}