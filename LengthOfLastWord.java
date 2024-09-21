import java.util.Scanner;

public class LengthOfLastWord {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the word: ");
        String str = input.nextLine();
        input.close();
        System.out.println(findLengthOfLat(str));
    }
    private static int findLengthOfLat(String str){
        if(str.length() == 0){
            return 0;
        }
        int length = 0;
        str = str.trim();
        for(int i = str.length()-1; i>0; i--){
            if(str.charAt(i) != ' '){
                length++;
            }else{
                break;
            }
        }
        return length;
    }
}
