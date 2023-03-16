class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }

    setLeft(leftNode) {
        this.left = leftNode;
    }

    setRight(rightNode) {
        this.right = rightNode;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while (true) {
                if (value < currentNode.value) {
                    // Left
                    if (!currentNode.left) {
                        currentNode.setLeft(newNode);
                        return this;
                    }

                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.setRight(newNode);
                        return this;
                    }

                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }

        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        let parentNode = null;

        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                // We have a match, get to work!

                // Option 1: No right child:
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        // if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.setLeft(currentNode.left);
                        }
                        // if parent < current value, make left child a right child of parent
                        else if (currentNode.value > parentNode.value) {
                            parentNode.setRight(currentNode.left);
                        }
                    }
                }
                // Option 2: Right child which doesn't have a left child
                else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.setLeft(currentNode.left);

                        // if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.setLeft(currentNode.right);
                        }
                        // if parent < current value, make left child a right child of parent
                        else if (currentNode.value > parentNode.value) {
                            parentNode.setRight(currentNode.left);
                        }
                    }
                }
                // Option 3: Right child that has a left child
                else {
                    // find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;

                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftmostParent.setLeft(leftmost.right);
                    leftmost.setLeft(currentNode.left);
                    leftmost.setRight(currentNode.right);

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.setLeft(leftmost);
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.setRight(leftmost);
                        }
                    }
                }
            }

            return true;
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.lookup(171));

// console.log(JSON.stringify(traverse(tree.root)));

//         9
//    4         20
// 1    6    15    170

function traverse(node) {
    const tree = { value: node.value };

    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);

    return tree;
}