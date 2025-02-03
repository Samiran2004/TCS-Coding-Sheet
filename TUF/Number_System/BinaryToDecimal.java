import java.util.Scanner;

public class BinaryToDecimal {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a binary number to convert it into decimal: ");
        String binaryNum = input.next();
        input.close();
        System.out.println(binaryNum + " in Decimal: " + binaryToDecimal(binaryNum));
    }

    private static int binaryToDecimal(String num) {
        int n = num.length();
        int base = 1;
        int ans = 0;
        for (int i = n - 1; i >= 0; i--) {
            if (num.charAt(i) == '1') {
                ans += base;
            }
            base *= 2;
        }
        return ans;
    }
}