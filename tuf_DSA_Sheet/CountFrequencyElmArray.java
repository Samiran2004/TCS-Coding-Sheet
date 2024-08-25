package tuf_DSA_Sheet;

import java.util.Scanner;

public class CountFrequencyElmArray {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i<size; i++){
            System.out.printf("Enter %d number element: ",i+1);
            arr[i] = input.nextInt();
        }
        countFrequency(arr);
    }
    private static void countFrequency(int[] arr){
        boolean[] checkArr = new boolean[arr.length];

        for (int i = 0; i<arr.length-1; i++){
            if (checkArr[i]){
                continue;
            }
            int count = 1;
            for (int j = i+1; j<arr.length; j++){
                if (arr[i] == arr[j]){
                    checkArr[j] = true;
                    count++;
                }
            }
            System.out.printf("Element %d is present in the array for %d times.\n",arr[i],count);
        }
    }
}
