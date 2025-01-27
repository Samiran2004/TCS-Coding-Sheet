import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;

public class ReplaceElmByRank {
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
        replaceElementByRank(arr);
    }

    private static void replaceElementByRank(int[] arr) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int[] brr = new int[arr.length];
        int temp = 1;
        for (int i = 0; i < arr.length; i++) {
            brr[i] = arr[i];
        }
        Arrays.sort(brr);
        for (int i = 0; i < arr.length; i++) {
            if (map.get(brr[i]) == null) {
                map.put(brr[i], temp);
                temp++;
            }
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.print(map.get(arr[i]) + " ");
        }
    }
}