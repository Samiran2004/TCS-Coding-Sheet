/*
 * Example 1:
Input:
 [1,2,4,7,7,5]
Output:
 Second Smallest : 2
	Second Largest : 5
Explanation:
 The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

Example 2:
Input:
 [1]
Output:
 Second Smallest : -1
	Second Largest : -1
Explanation:
 Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.
 */

import java.util.Scanner;

public class FindSecondSandLElm {
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
        System.out.println("Second largest element: "+ findSecondLargestElm(arr));
        System.out.println("Second smallest element: "+findSecondSmallestElm(arr));
    }

    private static int findSecondLargestElm(int[] arr) {
        int largestElm = Integer.MIN_VALUE;
        int secondLElm = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > largestElm) {
                secondLElm = largestElm;
                largestElm = arr[i];
            } else if (arr[i] > secondLElm && arr[i] != largestElm) {
                secondLElm = arr[i];
            }
        }
        return secondLElm;
    }

    private static int findSecondSmallestElm(int[] arr) {
        int smallestElm = Integer.MAX_VALUE;
        int secondSmllElm = Integer.MAX_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if (smallestElm > arr[i]) {
                secondSmllElm = smallestElm;
                smallestElm = arr[i];
            } else if (secondSmllElm > arr[i] && arr[i] != smallestElm) {
                secondSmllElm = arr[i];
            }
        }
        return secondSmllElm;
    }
}