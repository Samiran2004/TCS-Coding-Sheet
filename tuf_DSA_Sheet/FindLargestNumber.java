package tuf_DSA_Sheet;

import java.util.Scanner;

public class FindLargestNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i<size; i++){
            System.out.printf("Enter %d number element: ",i+1);
            arr[i] = input.nextInt();
        }
        System.out.println(findLargest(arr));
    }
    private static int findLargest(int[] arr){
        int ans = arr[0];
        for (int i = 1; i<arr.length; i++){
            if (ans < arr[i]){
                ans = arr[i];
            }
        }
        return ans;
    }
}
