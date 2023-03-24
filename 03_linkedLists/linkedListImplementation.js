// 10-->5-->16

let myLinkedListExample = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
};

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    setNext(next) {
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        this.tail.setNext(newNode);
        this.tail = newNode;

        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.setNext(this.head);

        this.head = newNode;

        this.length++;

        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    insert(index, value) {
        // Check params
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;

        leader.setNext(newNode);
        newNode.setNext(holdingPointer);

        this.length++;

        return this.printList();
    }

    traverseToIndex(index) {
        // Check params
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    remove(index) {
        // Check params
        if (index === 0) {
            this.length--;
            return (this.head = this.head.next);
        }

        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;

        if (index === this.length - 1) {
            leader.setNext(null);
            this.tail = leader;
        } else {
            leader.setNext(unwantedNode.next);
        }

        this.length--;

        return this.printList();
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.setNext(null);
        this.head = first;

        return this;
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
console.log(myLinkedList.printList());
console.log(myLinkedList.remove(2));
console.log(myLinkedList.remove(2));
console.log(myLinkedList.reverse());
// console.log(myLinkedList);