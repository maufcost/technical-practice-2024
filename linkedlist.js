class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add a new node with the given value at the end of the list
    append(value) {
        const newNode = new Node(value);

        if (this.head) {
            // The list is populated already
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            // First node/element!
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    // Add a new node with the given value at the beginning of the list
    prepend(value) {
        if (this.head) {
            // The list is populated already
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // First node/element;
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    // Remove the node with the given value from the list
    remove(value) {
        // If the list is empty
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next && currentNode.next.value !== value) {
            currentNode = currentNode.next;
        }

        if (currentNode.next) {
            currentNode.next  = currentNode.next.next;

            if (!currentNode.next) {
                tail = currentNode;
            }

            this.length--;
        }
    }

    // Find a node with the given value in the list
    find(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) return currentNode;
            currentNode = currentNode.next;
        }
        
        return null;
    }

    // Prints the linked list
    print() {
        let currentNode = this.head;
        const value = [];

        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(values.join(' -> '));
    }
}