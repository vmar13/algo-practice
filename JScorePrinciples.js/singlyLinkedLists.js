class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; //FIrst, you set the next val
            this.tail = newNode;     //Then, you set the tail as the newNode
        }
        this.length += 1
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        console.log(current.val, newTail.val)
    }
}

let list = new SinglyLinkedList();
list.push('Hello')
list.push('Goodbye')
list.push('!')
