// Однонаправлений зв'язний список
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SingleLinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            return this.head = newNode;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    delete(data) {
        if (this.head.data === data) {
            return this.head = this.head.next;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                return current.next = current.next.next;
            }
            current = current.next;
        }
    }
    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}
// приклад
const list = new SingleLinkedList();
list.add(1);
list.add(7);
list.add(3);
list.delete(0);
list.delete(1);
list.display(); 