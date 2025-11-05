class Stack{
    constructor(){
        this.items = [];
    }

    push(value){
       this.items.push(value);
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.pop();

    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.items.length -1]
    }
    isEmpty(){
        return this.items.length === 0;
    }
    print(){
        console.log(this.items.slice().reverse().join("->"))
    }
}

const stack = new Stack()
stack.push(10);
stack.push(20);
stack.push(30);
// stack.print();
// stack.pop();
// stack.print();
 const top = stack.peek();
 console.log(top);
stack.print();
const test = stack.isEmpty();
console.log(test);
stack.print();
