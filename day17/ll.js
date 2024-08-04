class ListNode{
    constructor(value){
        this.value= value
        this.next =null
    }
}

class LinkedList{
    constructor(head=null){
        this.head= head
    }
}

let node1 = new ListNode(5);
let node2= new ListNode(3);
let node3= new ListNode(6);
let node4= new ListNode(1);
node1.next=node2
node2.next=node3
node3.next= node4
console.log("before deletion", node1);

node1.next.next.next = null;

console.log("after deletion", node1);
