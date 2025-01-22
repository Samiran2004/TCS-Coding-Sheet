"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Display...
function display(arr) {
    var result = "";
    result += arr[0];
    for (var i = 1; i < arr.length; i++) {
        result += ", ".concat(arr[i]);
    }
    console.log(result);
}
// Insert beginning...
function insertBeginning(elm) {
    var newArr = [];
    newArr[0] = elm;
    for (var i = 0; i < arr.length; i++) {
        newArr[i + 1] = arr[i];
    }
    arr = newArr;
}
// Insert end...
function insertEnd(elm) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
    newArr[newArr.length] = elm;
    arr = newArr;
}
// Insert a position...
function insertPos(elm, pos) {
    if (pos < 0 || pos > arr.length) {
        console.log("Please enter a valid position...");
        return;
    }
    if (pos == 0) {
        insertBeginning(elm);
        return;
    }
    if (pos == arr.length - 1) {
        insertEnd(elm);
        return;
    }
    var newArr = [];
    for (var i = 0; i < pos; i++) {
        newArr[i] = arr[i];
    }
    newArr[pos] = elm;
    for (var i = pos; i < arr.length; i++) {
        newArr[i + 1] = arr[i];
    }
    arr = newArr;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log("Before adding the element...");
display(arr);
var choice = 3;
switch (choice) {
    case 1:
        var elm1 = 999;
        console.log("After adding the element at the beginning....");
        insertBeginning(elm1);
        display(arr);
        break;
    case 2:
        var elm2 = 999;
        console.log("After adding the element at the end.... ");
        insertEnd(elm2);
        display(arr);
        break;
    case 3:
        var elm3 = 999;
        var pos = 3;
        console.log("After adding the element at the ".concat(pos, ".... "));
        insertPos(elm3, pos);
        display(arr);
        break;
    default:
        break;
}
