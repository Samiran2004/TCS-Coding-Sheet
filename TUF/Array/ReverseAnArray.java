/*
 * Example 1:
    Input: N = 5, arr[] = {5,4,3,2,1}
    Output: {1,2,3,4,5}
    Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

 * Example 2:
    Input: N=6 arr[] = {10,20,30,40}
    Output: {40,30,20,10}
    Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.
*/

import java.util.Scanner;

public class ReverseAnArray {
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
        System.out.println("Before reverse:--->");
        printArray(arr);
        System.out.println("After reverse:--->");
        reversArray(arr);
        printArray(arr);
    }

    private static void reversArray(int[] arr) {
        int start = 0;
        int end = arr.length - 1;
        while (start <= end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    private static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + ",");
        }
        System.out.println();
    }
}
