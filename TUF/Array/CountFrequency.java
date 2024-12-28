/*
 * Example 1:
Input: arr[] = {10,5,10,15,10,5};
Output: 10  3
	 5  2
        15  1
Explanation: 10 occurs 3 times in the array
	      5 occurs 2 times in the array
              15 occurs 1 time in the array

Example2: 
Input: arr[] = {2,2,3,4,4,2};
Output: 2  3
	3  1
        4  2
Explanation: 2 occurs 3 times in the array
	     3 occurs 1 time in the array
             4 occurs 2 time in the array
*/

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CountFrequency {
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
        countFreq(arr);
    }

    // Time complexity:-> O(n*n)
    // Space complexity:-> O(n)
    // private static void countFreq(int[] arr) {
    // boolean[] visited = new boolean[arr.length];
    // for (int i = 0; i < arr.length; i++) {
    // if (visited[i] == true) {
    // continue;
    // }
    // int count = 1;
    // for (int j = i + 1; j < arr.length; j++) {
    // if (arr[i] == arr[j]) {
    // visited[j] = true;
    // count++;
    // }
    // }
    // System.out.println(arr[i] + ": " + count);
    // }
    // }

    private static void countFreq(int[] arr) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            map.put(arr[i], map.getOrDefault(arr[i], 0) + 1);
        }
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
