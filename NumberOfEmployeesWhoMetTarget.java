import java.util.Scanner;

public class NumberOfEmployeesWhoMetTarget {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i<size; i++){
            System.out.printf("Enter %d number element: ",i+1);
            arr[i] = input.nextInt();
        }
        System.out.print("Enter the target number: ");
        int target = input.nextInt();
        System.out.println(numberOfEmployeesWhoMetTarget(arr,target));
        input.close();
    }
    public static int numberOfEmployeesWhoMetTarget(int[] hours, int target){
        int count = 0;
        for (int i = 0; i<hours.length; i++ ){
            if (hours[i] >= target) count++;
        }
        return count;
    }
}


//https://leetcode.com/problems/number-of-employees-who-met-the-target/description/