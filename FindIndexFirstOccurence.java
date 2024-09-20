import java.util.Scanner;

public class FindIndexFirstOccurence {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the heystack string: ");
        String heyString = input.next();
        System.out.print("Enter the needle: ");
        String needleString = input.next();
        input.close();
        System.out.println(findTheIndexOfFirst(heyString, needleString));
    }

    private static int findTheIndexOfFirst(String hayStack, String needle) {
        int hayStackLength = hayStack.length();
        int needleLength = needle.length();
        if (hayStackLength < needleLength) {
            return -1;
        }
        for (int i = 0; i < hayStackLength; i++) {
            if (hayStack.charAt(i) == needle.charAt(0)) {
                if (compare(hayStack, needle, i) == true) {
                    return i;
                }
            }
        }
        return -1;
    }

    private static boolean compare(String heyString, String needleString, int idx) {
        int n1 = heyString.length();
        int n2 = needleString.length();
        for (int i = 0; i < n2; i++) {
            if (idx >= n1) {
                return false;
            }
            if (heyString.charAt(idx++) != needleString.charAt(i)) {
                return false;
            }
        }
        return true;
    }
}