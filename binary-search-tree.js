class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the BST
    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root) {
            this.insertNode(this.root, newNode);
        }else {
            // First node!
            this.root = newNode;
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            // Go to the left...
            if (node.left) {
                this.insertNode(node.left, newNode);
            } else {
                // Put it right there!
                node.left = newNode;
            }
        } else {
            // Go to the right...
            if (node.right) {
                this.insertNode(node.right, newNode);
            } else {
                // Put it right there!
                node.right = newNode;
            }
        }
    }

    // Search for a value in the BST
    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) return false;

        if (value < node.value) {
            // Go left...
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            // Go right...
            return this.searchNode(node.right, value);
        } else {
            // Found it!
            return true;
        }
    }

    findMinNode(node = this.root) {
        if (node === null) return node;
        if (node.left === null) return node;

        return this.findMinNode(node.left);
    }

    findMaxNode(node = this.root) {
        if (node === null) return node;
        if (node.right === null) return node;

        return this.findMaxNode(node.right);
    }

    // Remove a node with a specific value
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, value) {
        if (node === null) return null;

        if (value < node.value) {
            // Go left...
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            // Go right...
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            // Found the one to delete!!!!

            // Node with only one child or children
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Node with two children
            // Get the successor, which is the smallest in the right subtree.
            const minNode = this.findMinNode(node.right);
            node.value = minNode.value;

            // Delete the successor now
            node.right = this.removeNode(node.right, minNode.value);

        }
    }
}