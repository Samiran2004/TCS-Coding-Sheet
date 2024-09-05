package tuf_DSA_Sheet;

import java.util.Scanner;

public class AverageOfAllElement {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i<size; i++){
            System.out.printf("Enter %d number element: ",i+1);
            arr[i] = input.nextInt();
        }
        System.out.println(findAvgOfAllElm(arr));
    }
    private static double findAvgOfAllElm(int[] arr){
        if (arr.length == 0) return 0;
        double avg = 0;
        for (int i = 0; i<arr.length; i++){
            avg += arr[i];
        }
        return avg/arr.length;
    }
}
