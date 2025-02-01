import java.util.Scanner;

public class MaxMinDigitsInNum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = input.nextInt();
        input.close();
        System.out.println("Max digit in the number: " + findMaxDigit(num));
        System.out.println("Min digit in the number: " + findMinDigit(num));
    }

    private static int findMaxDigit(int num) {
        if (num < 10) {
            return num;
        } else {
            int maxNum = Integer.MIN_VALUE;
            while (num != 0) {
                int rem = num % 10;
                if (maxNum < rem) {
                    maxNum = rem;
                }
                num = num / 10;
            }
            return maxNum;
        }
    }

    private static int findMinDigit(int num) {
        if (num < 10) {
            return num;
        } else {
            int minNum = Integer.MAX_VALUE;
            while (num != 0) {
                int rem = num % 10;
                if (minNum > rem) {
                    minNum = rem;
                }
                num = num / 10;
            }
            return minNum;
        }
    }
}
