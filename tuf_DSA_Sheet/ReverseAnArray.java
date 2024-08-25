package tuf_DSA_Sheet;

import java.util.Arrays;
import java.util.Scanner;

public class ReverseAnArray {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i<size; i++){
            System.out.printf("Enter %d number element: ",i+1);
            arr[i] = input.nextInt();
        }
        System.out.println("Array before reversing: "+ Arrays.toString(arr));
        reverseArray(arr);
        System.out.println("Array after reversing: "+ Arrays.toString(arr));
    }
    public static void reverseArray(int[] arr){
        int startPtr = 0, endPtr = arr.length-1;
        while (startPtr <= endPtr){
            int temp = arr[startPtr];
            arr[startPtr] = arr[endPtr];
            arr[endPtr] = temp;
            startPtr++;
            endPtr--;
        }
    }
}
