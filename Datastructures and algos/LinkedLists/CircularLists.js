class Node {
    constructor(data) {
        this._data = data;
        this._next = undefined;
    }
}

class CircularLists {
    constructor() {
        this._head = null;
        this._tail = null;
    }

    addNode(data) {
        const newNode = new Node(data);

        if (this._head === null) {
            newNode._next = newNode; // Corrected the property to _next
            this._head = newNode;
            this._tail = newNode;
        } else {
            newNode._next = this._head; // Corrected the property to _next
            this._tail._next = newNode; // Corrected the property to _next
            this._tail = newNode;
        }
    }
}

// Example usage:
const myCircularList = new CircularLists();
myCircularList.addNode(1);
myCircularList.addNode(2);
myCircularList.addNode(3);

// Testing to see if the circular nature is preserved
console.log(myCircularList._head._data); // 1
console.log(myCircularList._head._next._data); // 2
console.log(myCircularList._head._next._next._data); // 3
console.log(myCircularList._head._next._next._next._data); // 1, should circle back to head
