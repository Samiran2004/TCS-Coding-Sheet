function findSecondLargestElm(arr: number[]): number {
    let largestElm: number = Number.MIN_VALUE;
    let secondLargElm: number = Number.MIN_VALUE;
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] > largestElm) {
            secondLargElm = largestElm;
            largestElm = arr[i];
        } else if (arr[i] > secondLargElm && arr[i] != largestElm) {
            secondLargElm = arr[i];
        }
    }
    return secondLargElm;
}

function findSecondSmallestElm(arr: number[]): number {
    let smallestElm: number = Number.MAX_VALUE;
    let secondSmallElm: number = Number.MAX_VALUE;
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] < smallestElm) {
            secondSmallElm = smallestElm;
            smallestElm = arr[i];
        } else if (arr[i] < secondSmallElm && arr[i] != smallestElm) {
            secondSmallElm = arr[i];
        }
    }
    return secondSmallElm;
}

let arr: number[] = [1, 2, 4, 7, 7, 5];
console.log(`Second largest element: ${findSecondLargestElm(arr)}`);
console.log(`Second smallest element: ${findSecondSmallestElm(arr)}`);

export { };