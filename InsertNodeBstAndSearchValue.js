class BstNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Bst {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (this.root === null) {
            this.root = new BstNode(data);
        } else {
            this.insertNode(this.root, data);
        }
    }

    insertNode(root, data) {
        if (data <= root.data) {
            if (root.left === null) {
                root.left = new BstNode(data);
            } else {
                this.insertNode(root.left, data);
            }
        } else {
            if (root.right === null) {
                root.right = new BstNode(data);
            } else {
                this.insertNode(root.right, data);
            }
        }
    }

    search(data) {
        if (this.root === null) {
            console.log("Empty Tree");
        } else {
            this.searchNode(this.root, data);
        }
    }

    searchNode(root, data) {
        if (root == null) {
            console.log("Element Not found");
            return;
        } else {
            if (data === root.data) {
                console.log("Element Found");
                return
            } else if (data < root.data) {
                this.searchNode(root.left, data)
            } else {
                this.searchNode(root.right, data);
            }
        }
    }
}

let binarySearchTree = new Bst();
binarySearchTree.insert(15);
binarySearchTree.insert(10);
binarySearchTree.insert(20);
binarySearchTree.insert(25);
binarySearchTree.insert(8);
binarySearchTree.insert(12);
binarySearchTree.search(70);
binarySearchTree.search(25);
