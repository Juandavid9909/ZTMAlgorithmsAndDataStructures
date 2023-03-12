class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    setNext(next) {
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.setNext(newNode);
            this.last = newNode;
        }

        this.length++;

        return this;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;

        this.length--;

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);