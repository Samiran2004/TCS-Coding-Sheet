"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.items.length == 0;
    };
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error("Stack is empty...");
        }
        else {
            return this.items.pop();
        }
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            throw new Error("Stack is empty...");
        }
        else {
            return this.items[this.items.length - 1];
        }
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    return Stack;
}());
function reverseString(str) {
    var newStr = "";
    var stack = new Stack();
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);
        stack.push(currChar);
    }
    while (!stack.isEmpty()) {
        newStr += stack.pop();
    }
    return newStr;
}
var str = "Hello";
console.log("Before reverse the string: ".concat(str));
console.log("After reverse the string: ".concat(reverseString(str)));
