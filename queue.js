class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(value){
        this.items.push(value);
    }
    dequeue(){
      if(this.isEmpty()){
        return undefined;
      }
      return this.items.shift();
    }
    peek(){
      if(this.isEmpty()){
        return undefined;
      }
      return this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }

    print(){
      console.log("start",this.items.join("->"),"->End");
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
queue.print();
queue.dequeue();
queue.print();
const top =   queue.peek();
console.log(top);
queue.print();

const check = queue.isEmpty();
console.log(check);