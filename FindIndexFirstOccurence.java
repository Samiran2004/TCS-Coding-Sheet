import java.util.Scanner;

public class FindIndexFirstOccurence {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the string array: ");
        int size = input.nextInt();
        String[] strArr = new String[size];
        for(int i = 0; i<size; i++){
            System.out.print("Enter the string: ");
            strArr[i] = input.next();
        }
    }
}