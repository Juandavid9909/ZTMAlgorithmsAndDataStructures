// 10-->5-->16

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }

    setPrev(prev) {
        this.prev = prev;
    }

    setNext(next) {
        this.next = next;
    }
}

class DoubleLinkedList {
    constructor(value) {
        this.head = new Node(value);

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        newNode.setPrev(this.tail);

        this.tail.setNext(newNode);
        this.tail = newNode;

        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.setNext(this.head);

        this.head.setPrev(newNode);
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
        const follower = leader.next;

        leader.setNext(newNode);
        newNode.setNext(follower);
        newNode.setPrev(leader);
        follower.setPrev(newNode);

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

            this.head = this.head.next;
            return (this.head.setPrev(null));
        }

        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;

        if (index === this.length - 1) {
            leader.setNext(null);
            this.tail.setPrev(null);
            this.tail = leader;
        } else {
            leader.setNext(unwantedNode.next);
            unwantedNode.next.setPrev(leader);
            unwantedNode.setPrev(null);
        }

        this.length--;

        return this.printList();
    }
}

const myDoubleLinkedList = new DoubleLinkedList(10);

myDoubleLinkedList.append(5);
myDoubleLinkedList.append(16);
myDoubleLinkedList.prepend(1);
myDoubleLinkedList.insert(1, 99);
myDoubleLinkedList.insert(20, 88);
console.log(myDoubleLinkedList.printList());
console.log(myDoubleLinkedList.remove(2));
console.log(myDoubleLinkedList.remove(2));
console.log(myDoubleLinkedList);