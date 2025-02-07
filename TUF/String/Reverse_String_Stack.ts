class Stack<T> {
    private items: T[] = [];

    isEmpty(): boolean {
        return this.items.length == 0;
    }

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Stack is empty...");
        } else {
            return this.items.pop();
        }
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Stack is empty...");
        } else {
            return this.items[this.items.length - 1];
        }
    }

    size(): number {
        return this.items.length;
    }
}

function reverseString(str: string): string {
    let newStr: string = "";
    let stack: Stack<string> = new Stack<string>();
    for (let i: number = 0; i < str.length; i++) {
        let currChar: string = str.charAt(i);
        stack.push(currChar);
    }
    while (!stack.isEmpty()) {
        newStr += stack.pop();
    }
    return newStr;
}

let str: string = "Hello";
console.log(`Before reverse the string: ${str}`);
console.log(`After reverse the string: ${reverseString(str)}`);

export { };