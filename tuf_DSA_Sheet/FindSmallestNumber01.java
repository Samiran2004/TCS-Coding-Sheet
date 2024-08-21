package tuf_DSA_Sheet;

import java.util.Arrays;
import java.util.Scanner;

public class FindSmallestNumber01 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i<size; i++){
            System.out.printf("Enter %d number element: ",i+1);
            arr[i] = input.nextInt();
        }
        System.out.println("Smallest number is: "+findSmallest(arr));
    }

    //Time complexity (On^2)...
//    public static int findSmallest(int[] arr){
//        int ans = 0;
//        for (int i = 0; i<arr.length-1; i++){
//            for (int j = i+1; j<arr.length; j++){
//                if (arr[i] > arr[j]){
//                    ans = arr[j];
//                }
//            }
//        }
//        return ans;
//    }

    //Time complexity [ O(n log n) ]...
//    public static int findSmallest(int[] arr){
//        Arrays.sort(arr);
//        return arr[0];
//    }

    //Time complexity (On)
    public static int findSmallest(int[] arr){
        int ans = arr[0];
        for (int i = 1; i<arr.length; i++){
            if (ans > arr[i]){
                ans = arr[i];
            }
        }
        return ans;
    }
}
