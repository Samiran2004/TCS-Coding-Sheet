package tuf_DSA_Sheet;

import java.util.Arrays;
import java.util.Scanner;

//Find Second Smallest and Second-Largest Element in an array
public class FindSLargestAndSmallest {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i<size; i++){
            System.out.printf("Enter %d number element: ",i+1);
            arr[i] = input.nextInt();
        }
        findSecSmallLarge(arr);
    }
    public static void findSecSmallLarge(int[] arr){

//        //Brute Force...
//        if (arr.length <= 1){
//            System.out.println("Smallest: "+-1);
//            System.out.println("Largest: "+-1);
//            return;
//        }
//        Arrays.sort(arr);
//        System.out.println("Smallest: "+arr[0]);
//        System.out.println("Largest: "+arr[arr.length-1]);


        //Optimal...
        if (arr.length <= 1){
            System.out.println(-1);
            return;
        }
        int small = Integer.MAX_VALUE;
        int secSmall = Integer.MAX_VALUE;
        int large = Integer.MIN_VALUE;
        int secLarge = Integer.MIN_VALUE;
        for (int i = 0; i<arr.length; i++){
            small = Math.min(small,arr[i]);
            large = Math.max(large,arr[i]);
        }
        for (int i = 0; i<arr.length; i++){
            if (arr[i] < secSmall && arr[i] != small){
                secSmall = arr[i];
            }
            if (arr[i] > secLarge && arr[i] != large){
                secLarge = arr[i];
            }
        }
        System.out.println("Second smallest: "+secSmall);
        System.out.println("Second largest: "+secLarge);
    }
}
