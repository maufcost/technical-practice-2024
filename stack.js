// LIFO
class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty!";
        return this.items.pop();
    }

    // Returns the item at the top of the stack without
    // removing it
    peek() {
        if (this.isEmpty()) return "Stack is empty!";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    // Etc.... just like we did with the Queue
}