import java.util.*;

public class LongestCommonPrefix{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();
        String[] arr = new String[size];
        for(int i = 0; i < size; i++){
            System.out.print("Enter the string: ");
            arr[i] = input.next();
        }
        System.out.println(longestPrefix(arr));
        input.close();
    }
    private static String longestPrefix(String[] str){
        Arrays.sort(str);
        String firstStr = str[0];
        String lastStr = str[str.length - 1];
        StringBuilder ans = new StringBuilder();
        for(int i = 0; i<Math.min(firstStr.length(), lastStr.length()); i++){
            if(firstStr.charAt(i) != lastStr.charAt(i)){
                return ans.toString();
            }
            ans.append(firstStr.charAt(i));
        }
        return ans.toString();
    }
}