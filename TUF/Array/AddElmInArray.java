import java.util.Scanner;

public class AddElmInArray {
    static int[] arr;

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        arr = new int[size];
        for (int i = 0; i < size; i++) {
            System.out.printf("Enter %d number element of the array: ", i + 1);
            arr[i] = input.nextInt();
        }
        System.out.println("Before Adding...");
        display(arr);
        System.out.println("Enter your choice: ");
        System.out.print("Enter 1 for insert beginning, Enter 2 for insert end, Enter 3 for insert a position: ");
        int choice = input.nextInt();
        switch (choice) {
            case 1:
                System.out.print("Enter the element to insert at beginning: ");
                int elm1 = input.nextInt();
                insertBeginning(elm1);
                System.out.println("After adding element at the beginning...");
                display(arr);
                break;
            case 2:
                System.out.print("Enter the element to insert at the end: ");
                int elm2 = input.nextInt();
                System.out.print("After adding element at the end: ");
                insertEnd(elm2);
                display(arr);
                break;
            case 3:
                System.out.print("Enter the element to insert: ");
                int elm3 = input.nextInt();
                System.out.print("Enter the position: ");
                int pos = input.nextInt();
                if (pos > arr.length) {
                    System.out.println("Please enter a valid position...");
                    break;
                }
                insertPosition(elm3, pos);
                System.out.printf("After adding element at the %d number position: ", pos + 1);
                display(arr);
                break;
            default:
                System.out.println("Please enter a valid choice...");
                break;
        }
        input.close();
    }

    // Print the array...
    private static void display(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    // Insert beginning...
    private static void insertBeginning(int elm) {
        int[] newArr = new int[arr.length + 1];
        newArr[0] = elm;
        for (int i = 0; i < arr.length; i++) {
            newArr[i + 1] = arr[i];
        }
        arr = newArr;
    }

    // Insert End...
    private static void insertEnd(int elm) {
        int[] newArr = new int[arr.length + 1];
        for (int i = 0; i < arr.length; i++) {
            newArr[i] = arr[i];
        }
        newArr[newArr.length - 1] = elm;
        arr = newArr;
    }

    // // Insert Position...
    private static void insertPosition(int elem, int pos) {
        if (pos < 0 || pos > arr.length - 1) {
            return;
        }
        if (pos == 0) {
            insertBeginning(elem);
            return;
        }
        if (pos == arr.length - 1) {
            insertEnd(elem);
            return;
        }
        int[] newArr = new int[arr.length + 1];
        for (int i = 0; i < pos; i++) {
            newArr[i] = arr[i];
        }
        newArr[pos] = elem;
        for (int i = pos; i < arr.length; i++) {
            newArr[i + 1] = arr[i];
        }
        arr = newArr;
    }
}
