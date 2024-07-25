class Node {
    constructor(data) {
        this._prev = null;
        this._data = data;
        this._next = null;
    }
}

class DoubleCircularLinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
    }

    addNode(data) {
        const newNode = new Node(data);

        if (this._head === null) {
            newNode._next = newNode;
            newNode._prev = newNode;
            this._head = newNode;
            this._tail = newNode;
        } else {
            newNode._next = this._head;
            newNode._prev = this._tail;
            this._tail._next = newNode;
            this._head._prev = newNode;
            this._tail = newNode;
        }
    }
    traverse() {
        if (this._head === null) {
            console.log("The list is empty.");
            return;
        }

        let current = this._head;
        do {
            console.log(current._data);
            current = current._next;
        } while (current !== this._head);
    }
}


const myDoubleCircularList = new DoubleCircularLinkedList();
myDoubleCircularList.addNode(1);
myDoubleCircularList.addNode(2);
myDoubleCircularList.addNode(3);


myDoubleCircularList.traverse();
console.log(" ")

console.log(myDoubleCircularList._head._data); // 1
console.log(myDoubleCircularList._head._next._data); // 2
console.log(myDoubleCircularList._head._next._next._data); // 3
console.log(myDoubleCircularList._head._next._next._next._data); // 1, circles back to head
console.log(myDoubleCircularList._tail._data); // 3
console.log(myDoubleCircularList._tail._prev._data); // 2
console.log(myDoubleCircularList._tail._prev._prev._data); // 1
console.log(myDoubleCircularList._tail._next._data); // 1, circles back to head
