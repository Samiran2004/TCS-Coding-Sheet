package BinarySearch;

public class MaximumMinimumElementInRotatedSortedArray {
    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 5, 6, 7, 8, 9, 10, 1};
        System.out.println("Minimum Element is : "+MaxElement(arr,0,arr.length-1));
        System.out.println("Minimum Element is : "+MinElement(arr,0, arr.length-1));
    }
    public static int MaxElement(int[] arr , int st , int end){
        while(st<end){
            int mid = st+(end-st)/2;
            if(arr[mid]>arr[end]){
                st = mid+1;
            }
            else{
                end--;
            }
        }
        return arr[st-1];
    }
    public static int MinElement(int[] arr , int st , int end){
        while(st<end){
            int mid = st+(end-st)/2;
            if(arr[mid]>arr[end]){
                st = mid+1;
            }
            else if(arr[mid]<arr[end]){
                end = mid;
            }
            else{
                end--;
            }
        }
        return arr[st];
    }
}
