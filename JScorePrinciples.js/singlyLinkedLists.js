function find_mistake(nums) {
    let dupe;
    let counter = {};
    
    for (let num of nums) {
      counter[num] ? counter[num] += 1 : counter[num] = 1
    }
    return counter;
  }

console.log(find_mistake([4,3,3,1]))
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode; //FIrst, you set the next val
//             this.tail = newNode;     //Then, you set the tail as the newNode
//         }
//         this.length += 1
//         return this;
//     }

//     pop() {
//         if (!this.head) return undefined;
//         let current = this.head;
//         let newTail = current;
//         while (current.next) {
//             newTail = current;
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }

//     shift() {
//         if (!this.head) return undefined;
//         let current = this.head;
//         this.head = current.next;
//         this.length--;
//         if (this.length === 0) this.tail = null;
//         return current;
//     }

//     unshift(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     get(index) {
//         if (index < 0 || index >= this.length) return null;
//         let counter = 0;
//         let current = this.head;
//         while (counter !== index) {
//             current = current.next;
//             counter++;
//         }
//         return current;
//     }

//     set(index, val) {
//         let foundNode = this.get(index);
//         if (!foundNode) return false;
//         foundNode.val = val;
//         return true;
//     }
// }

// let list = new SinglyLinkedList();
// list.push('Hello')
// list.push('Goodbye')
// list.push('!')
