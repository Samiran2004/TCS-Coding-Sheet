package tuf_DSA_Sheet;

import java.util.Arrays;
import java.util.Scanner;

public class FindMedianOfArray {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i<arr.length; i++){
            System.out.printf("Enter %d number element: ",i+1);
            arr[i] = input.nextInt();
        }
        findMedian(arr);
    }
    private static void findMedian(int[] arr){
        Arrays.sort(arr);
        int n = arr.length;
        if (n % 2 == 0)
        {
            int ind1 = (n / 2) - 1;
            int ind2 = (n / 2);
            System.out.print((double)(arr[ind1] + arr[ind2]) / 2);
        }
        else
        {
            System.out.print(arr[(n / 2)]);
        }
    }
}
