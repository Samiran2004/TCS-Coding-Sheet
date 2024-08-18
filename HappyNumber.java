import java.util.Scanner;

public class HappyNumber {
    public static int findSqr(int num){
        int ans = 0;
        while (num!=0){
            int rem = num % 10;
            ans += rem*rem;
            num = num/10;
        }
        return ans;
    }

    public static boolean isHappyNumber(int num){
        int slow = num, fast = num;
        do {
            slow = findSqr(slow);
            fast = findSqr(findSqr(fast));
        } while (slow != fast);
        return slow == 1;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = input.nextInt();
        System.out.println(isHappyNumber(num));
    }
}
