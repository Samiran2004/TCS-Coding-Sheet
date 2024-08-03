import java.util.Scanner;

public class Equilibrium_Index {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++){
            System.out.print("Enter the element: ");
            arr[i] = input.nextInt();
        }
        System.out.println(findPivot(arr));
    }

    public static int findPivot(int[] arr){
        if (arr.length == 0){
            return -1;
        }
        int leftSum = 0, rightSum = 0;
        for (int i = 0; i<arr.length; i++){
            rightSum += arr[i];
        }
        for (int i = 0; i<arr.length; i++){
            rightSum -= arr[i];
            if(rightSum == leftSum){
                return i;
            }
            leftSum += arr[i];
        }
        return -1;
    }
}
