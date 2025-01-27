import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class SortElmByFrequency {
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
        sortElementByFrequency(arr);
    }

    private static void sortElementByFrequency(int[] arr) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int[] newArr = new int[arr.length];
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            map.put(arr[i], (map.getOrDefault(arr[i], 0) + 1));
        }
        while (!map.isEmpty()) {
            int maxElm = findMaxFrequency(map);
            int maxFreq = map.get(maxElm);
            for (int j = 0; j < maxFreq; j++) {
                newArr[count] = maxElm;
                count++;
            }
            map.remove(maxElm);
        }
        for (int i = 0; i < newArr.length; i++) {
            System.out.print(newArr[i] + ", ");
        }
    }

    private static int findMaxFrequency(HashMap<Integer, Integer> map) {
        int maxFreq = 0;
        int maxElm = -1;
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() > maxFreq) {
                maxFreq = entry.getValue();
                maxElm = entry.getKey();
            }
        }
        return maxElm;
    }
}
