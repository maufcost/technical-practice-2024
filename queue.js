// FIFO
class Queue {
    constructor() {
        this.items = [];
    }

    // Add an item to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the item that's in front of the queue
    dequeue() {
        if (this.isEmpty()) return "Queue is empty!"

        return this.items.shift();
    }

    // Returns the item at the front of the queue without removing it
    front() {
        if (this.isEmpty()) return "Queue is empty!"

        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    print() {
        return this.items.toString();
    }
}