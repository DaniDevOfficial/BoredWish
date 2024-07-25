class Node {
    constructor(data) {
        this._data = data;
        this._next = null;
    }

    // Getter for data
    get Data() {
        return this._data;
    }

    // Setter for data
    set Data(data) {
        this._data = data;
    }

    // Getter for next
    get Next() {
        return this._next;
    }

    // Setter for next
    set Next(next) {
        this._next = next;
    }

    // toString method
    toString() {
        return `Node { Data: ${this._data}, Next: ${this._next ? this._next.Data : 'null'} }`;
    }
}

// Example usage:
const node1 = new Node(1);
const node2 = new Node(2);
node1.Next = node2;

const node3 = new Node(456);
const node4 = new Node(789);
const node5 = new Node(101112);

node2.Next = node3;
node3.Next = node4;
node4.Next = node5;

const firstNode = node1;



console.log(node1.toString()); // Node { Data: 1, Next: 2 }
console.log(node2.toString()); // Node { Data: 2, Next: null }

