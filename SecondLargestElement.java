import java.util.Arrays;
import java.util.Scanner;

public class SecondLargestElement {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for(int i = 0; i<size; i++){
            System.out.print("Enter the element: ");
            arr[i] = input.nextInt();
        }
        System.out.println(findSecondLargest(arr));
        input.close();
    }

    public static int findSecondLargest(int[] arr){
        if(arr.length == 0){
            return -1;
        }
        Arrays.sort(arr);
        int lastIdx = arr.length-1;
        if (arr[lastIdx] != arr[lastIdx-1]){
            return arr[lastIdx-1];
        }
        while (arr[lastIdx] == arr[lastIdx-1]){
            lastIdx--;
        }
        return arr[lastIdx-1];
    }
}