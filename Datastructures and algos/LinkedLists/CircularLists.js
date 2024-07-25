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
            newNode._next = newNode; 
            this._head = newNode;
            this._tail = newNode;
        } else {
            newNode._next = this._head; 
            this._tail._next = newNode; 
            this._tail = newNode;
        }
    }
}

const myCircularList = new CircularLists();
myCircularList.addNode(1);
myCircularList.addNode(2);
myCircularList.addNode(3);

console.log(myCircularList._head._data); // 1
console.log(myCircularList._head._next._data); // 2
console.log(myCircularList._head._next._next._data); // 3
console.log(myCircularList._head._next._next._next._data); // 1
