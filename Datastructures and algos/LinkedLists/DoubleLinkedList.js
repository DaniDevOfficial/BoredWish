class DoubleLinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
    }

    addNode(data) {
        const newNode = new Node(data);

        if (this._head === null) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            newNode._prev = this._tail;
            this._tail._next = newNode;
            this._tail = newNode;
        }
    }
}

const list = new DoubleLinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
