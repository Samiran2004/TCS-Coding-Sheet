import java.util.Scanner;

public class Valid_Palindrome {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a word: ");
        String str = input.nextLine();
        input.close();
        System.out.println(checkPalindrome(str));
    }

    private static boolean checkPalindrome(String str) {
        // if (str.length() == 1) {
        // return true;
        // }
        // str = str.toLowerCase();
        // String newStr = "";
        // for(int i = 0; i<str.length(); i++){
        // if (str.charAt(i) == ',' || str.charAt(i) == ':' || str.charAt(i) == ' ') {
        // continue;
        // }
        // newStr += str.charAt(i);
        // }
        // int start = 0, end = newStr.length()-1;
        // String firstPart = String.valueOf(newStr.charAt(0));
        // String lastPart = String.valueOf(newStr.charAt(end));
        // while(start < end){
        // start++;
        // end--;
        // firstPart += newStr.charAt(start);
        // lastPart += newStr.charAt(end);
        // }
        // System.out.println(newStr);
        // System.out.println(firstPart);
        // System.out.println(lastPart);
        // return firstPart.equals(lastPart);

        str = str.toLowerCase();
        StringBuilder newStr = new StringBuilder();
        
        for (int i = 0; i < str.length(); i++) {
            char currentChar = str.charAt(i);
            if (Character.isLetterOrDigit(currentChar)) {
                newStr.append(currentChar);
            }
        }

        int start = 0, end = newStr.length() - 1;
        
        while (start < end) {
            if (newStr.charAt(start) != newStr.charAt(end)) {
                return false;
            }
            start++;
            end--;
        }
        
        return true;
    }
}