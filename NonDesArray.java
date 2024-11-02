import java.util.Scanner;

public class NonDesArray {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];

        for (int i = 0; i<size; i++){
            System.out.print("Enter the element of the array: ");
            arr[i] = input.nextInt();
        }
        System.out.println(checkNonDecArray(arr));
        input.close();
    }

    public static boolean checkNonDecArray(int[] arr){
        int count = 0;
        for(int i = 0; i<arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                count++;
                if (count > 1){
                    return false;
                }
                if(i > 0 && arr[i-1]>arr[i+1]) {
                    arr[i + 1] = arr[i];
                }else {
                    arr[i] = arr[i+1];
                }
            }
        }
        return true;
    }
}