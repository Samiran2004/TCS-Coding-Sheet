import java.util.Arrays;
import java.util.Scanner;

public class TwoSum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            System.out.printf("Enter the %d number element of the array: ", i + 1);
            arr[i] = input.nextInt();
        }
        System.out.print("Enter the target: ");
        int target = input.nextInt();

        System.out.println(Arrays.toString(twoSum(arr, target)));
        input.close();
    }

    public static int[] twoSum(int[] arr, int target) {
        int[] ansArr = new int[2];

        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == target) {
                    ansArr[0] = i;
                    ansArr[1] = j;
                    break;
                }
            }
        }
        return ansArr;
    }
}
