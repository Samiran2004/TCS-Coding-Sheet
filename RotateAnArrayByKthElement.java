import java.util.Arrays;
import java.util.Scanner;

public class RotateAnArrayByKthElement {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i<size; i++){
            System.out.print("Enter the element: ");
            arr[i] = input.nextInt();
        }
        System.out.print("Enter the K-th value: ");
        int k = input.nextInt();
        rotateArray(arr,k);
        System.out.println(Arrays.toString(arr));
    }

    public static void rotateArray(int[] arr, int k){
        int i = 0, j = k+1;
        while (i<=k && j<=arr.length-1){
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j++;
        }
        System.out.println(i);
        System.out.println(j);
    }
}
