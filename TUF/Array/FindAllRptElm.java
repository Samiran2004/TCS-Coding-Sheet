import java.util.HashMap;
import java.util.Scanner;
import java.util.Map.Entry;

public class FindAllRptElm {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            System.out.printf("Enter %d number element: ", i + 1);
            arr[i] = input.nextInt();
        }
        input.close();
        System.out.println("The repeating elements are: ");
        findRepeatingElements(arr);
    }

    private static void findRepeatingElements(int[] arr) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            map.put(arr[i], map.getOrDefault(arr[i], 0) + 1);
        }
        for (Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() > 1) {
                System.out.print(entry.getKey() + ", ");
            }
        }
    }
}
