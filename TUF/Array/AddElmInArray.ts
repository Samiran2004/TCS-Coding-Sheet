// Display...
function display(arr: number[]): void {
    let result: string = "";
    result += arr[0];
    for (let i: number = 1; i < arr.length; i++) {
        result += `, ${arr[i]}`;
    }
    console.log(result);
}

// Insert beginning...
function insertBeginning(elm: number): void {
    let newArr: number[] = [];
    newArr[0] = elm;
    for (let i: number = 0; i < arr.length; i++) {
        newArr[i + 1] = arr[i];
    }
    arr = newArr;
}

// Insert end...
function insertEnd(elm: number): void {
    let newArr: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
    newArr[newArr.length] = elm;
    arr = newArr;
}

// Insert a position...
function insertPos(elm: number, pos: number): void {
    if(pos < 0 || pos > arr.length) {
        console.log("Please enter a valid position...");
        return;
    }
    if(pos == 0) {
        insertBeginning(elm);
        return;
    }
    if(pos == arr.length-1) {
        insertEnd(elm);
        return;
    }
    let newArr: number[] = [];
    for(let i: number = 0; i<pos; i++) {
        newArr[i] = arr[i];
    }
    newArr[pos] = elm;
    for(let i: number = pos; i<arr.length; i++) {
        newArr[i+1] = arr[i];
    }
    arr = newArr;
}

let arr: number[] = [1, 2, 3, 4, 5, 6];
console.log("Before adding the element...");
display(arr);

let choice: number = 3;
switch (choice) {
    case 1:
        let elm1: number = 999;
        console.log("After adding the element at the beginning....");
        insertBeginning(elm1);
        display(arr);
        break;
    case 2:
        let elm2: number = 999;
        console.log("After adding the element at the end.... ");
        insertEnd(elm2);
        display(arr);
        break;
    case 3:
        let elm3: number = 999;
        let pos: number = 3;
        console.log(`After adding the element at the ${pos}.... `);
        insertPos(elm3, pos);
        display(arr);
        break;
    default:
        console.log("Please enter a valid position....");
        break;
}

export { };