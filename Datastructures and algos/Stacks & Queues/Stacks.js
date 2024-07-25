class Stack {
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length == 0){
            throw console.error("items is empty");
        }
        this.items.pop();
    }
    peek(){
        if(this.items.length == 0){
            throw console.error("items is empty");
        }
        return this.items[this.items.length - 1];
    }
    size(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length == 0 ? false : true
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(123)
stack.push(123)
stack.push(123)
stack.push(123)
stack.push(123)
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());