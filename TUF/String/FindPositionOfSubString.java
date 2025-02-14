import java.util.Scanner;

public class FindPositionOfSubString {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String str = input.next();
        System.out.print("Enter the sub string: ");
        String subStr = input.next();
        input.close();
        System.out.println(findSubStringPosition(str, subStr));
    }

    private static int findSubStringPosition(String str, String subStr) {
        int strLen = str.length();
        int subStrLen = subStr.length();
        if(subStrLen > strLen) {
            throw new Error("Please enter a valid sub string..");
        }else {
            for(int i = 0; i<strLen; i++) {
                int temp = i;
                int j = 0;
                for(j = 0; j<subStrLen; j++) {
                    if(str.charAt(temp) != subStr.charAt(j)){
                        break;
                    }
                    temp++;
                }
                if (j == subStrLen) {
                    return i;
                }
            }
            return -1;
        }
    }
}
