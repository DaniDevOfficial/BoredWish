class Node {
    constructor(data) {
        this._data = data;
        this._next = null;
    }
}

class SlightlyLinkedList {
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
            this._tail._next = newNode;
            this._tail = newNode;
        }
    }

    traversal() {
        if (this._head === null) return "This list is empty";

        let currentNode = this._head;
        let returnValue = "";

        while (currentNode !== null) {
            returnValue += currentNode._data + (currentNode._next ? " -> " : "");
            currentNode = currentNode._next;
        }

        return returnValue + " -> null";
    }

    removeNodeAtIndex(index) {
        if (this._head === null) return "List is empty";

        if (index === 0) {
            this._head = this._head._next;
            if (this._head === null) {
                this._tail = null;
            }
            return "Node deleted";
        }

        let currentNode = this._head;
        let currentIndex = 0;

        while (currentNode._next !== null && currentIndex < index - 1) {
            currentNode = currentNode._next;
            currentIndex++;
        }

        if (currentIndex === index - 1 && currentNode._next !== null) {
            currentNode._next = currentNode._next._next;
            if (currentNode._next === null) {
            }
            return "Node deleted";
        }

        return "Index out of bounds";
    }
}

// Example usage
const list = new SlightlyLinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
console.log(list.traversal());

console.log(list.removeNodeAtIndex(1));
console.log(list.traversal()); 

console.log(list.removeNodeAtIndex(0)); 
console.log(list.traversal());

console.log(list.removeNodeAtIndex(0)); 
console.log(list.traversal()); 

console.log(list.removeNodeAtIndex(2)); 
