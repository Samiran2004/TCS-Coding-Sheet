import java.util.Arrays;
import java.util.Scanner;

public class FirstMissingPositive {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i<size; i++){
            System.out.print("Enter the element: ");
            arr[i] = input.nextInt();
        }
        input.close();
    }

    public static int firstMissingPositive(int[] arr){
        Arrays.sort(arr);
        return arr[1];
    }
}
