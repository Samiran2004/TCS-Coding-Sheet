import java.util.Arrays;
import java.util.Scanner;

public class RotateAnArrayByKthElement {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i<size; i++){
            System.out.print("Enter the element: ");
            arr[i] = input.nextInt();
        }
        System.out.print("Enter the K-th value: ");
        int k = input.nextInt();
        rotateArray(arr,k);
        System.out.println(Arrays.toString(arr));
        input.close();
    }

    public static void rotateArray(int[] arr, int k){
//        int i = 0, j = k+1;
//        while (i<=k && j<arr.length){
//            int temp = arr[i];
//            arr[i] = arr[j];
//            arr[j] = temp;
//            i++;
//            j++;
//        }
//        if(i == k && j == arr.length){
//            j = k+1;
//            while (i<j && j<arr.length){
//                int temp = arr[i];
//                arr[i] = arr[j];
//                arr[j] = temp;
//                i++;
//                j++;
//            }
//        }
        reverseArr(arr,0,arr.length-1);
        reverseArr(arr,0,k-1);
        reverseArr(arr,k,arr.length-1);
    }

    public static void reverseArr(int[] arr, int start, int end){
        while (start<end){
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}
