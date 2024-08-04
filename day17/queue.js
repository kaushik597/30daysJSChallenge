class Queue{
    constructor(){
        this.items={}
        this.frontIndex=0;
        this.backIndex=0;
    }

    enqueue(item){
        this.items[this.backIndex]=item;
        this.backIndex++;
        return item + "inserted"
    }

   dequeue(){
    const item = this.items[this.frontIndex]
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item
    
   }
    printQueue(){
        return this.items
    }
    peek(){
        return this.items[this.frontIndex]
    }
}


const q =new Queue()
q.enqueue(1);

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
const items=q.printQueue();
console.log(items,"____>");
q.dequeue()
console.log(items,"____>");
console.log(q.peek());




