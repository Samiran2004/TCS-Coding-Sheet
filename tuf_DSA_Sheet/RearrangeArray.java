package tuf_DSA_Sheet;

import java.util.Arrays;
import java.util.Scanner;

public class RearrangeArray {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i<size; i++){
            System.out.printf("Enter %d number element: ",i+1);
            arr[i] = input.nextInt();
        }
        System.out.println(Arrays.toString(arr));
        rearrangeArray(arr);
        System.out.println(Arrays.toString(arr));
    }
    private static void rearrangeArray(int[] arr){
        Arrays.sort(arr);
        int mid = arr.length/2, endPtr = arr.length-1;
        while (mid != endPtr){
            int temp = arr[mid];
            arr[mid] = arr[endPtr];
            arr[endPtr] = temp;
            mid++;
            endPtr--;
        }
    }
}
