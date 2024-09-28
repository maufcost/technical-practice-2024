class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.rigth = right;
    }
}

const BFS = root => {
    if (root === null) return [];

    const queue = [];
    const result = [];

    queue.push(root);

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.value);

        if (queue.left != null) queue.push(node.left);
        if (queue.right != null) queue.push(node.right);
    }

    return result;
}