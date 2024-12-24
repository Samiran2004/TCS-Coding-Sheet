/*
Problem Statement: Given an array, we have to find the smallest element in the array.

Examples:

    Example 1:
        Input: arr[] = {2,5,1,3,0};
        Output: 0
        Explanation: 0 is the smallest element in the array. 

    Example2: 
        Input: arr[] = {8,10,5,7,9};
        Output: 5
E       xplanation: 5 is the smallest element in the array.
*/

import java.util.Scanner;

public class FindSmallestElm {
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
        System.out.println(findSmallestElm(arr));
    }

    private static int findSmallestElm(int[] arr) {
        int smallest = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i];
            }
        }
        return smallest;
    }
}

//Time-Complexity:-> O(n);
//Space-Complexity:-> O(1);