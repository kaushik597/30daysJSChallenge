class Stack{
    constructor(){
        this.items=[]
    }
   push(element){
    this.items.push(element)
   }

   pop(){
    if(this.items.length==0){
        return "underflow"
    }
    return this.items.pop();
   }
   peek(){
    return this.items[this.items.length-1]
   }
}


const stk= new Stack();
stk.push(10);
stk.push(20);
stk.push(30);
stk.push(40);

console.log(stk);
stk.pop();
console.log(stk);

const strStack = new Stack()
function reverseString(element){
    let length=element.length;
    let result="";
    let arr=element.split('');
    console.log(arr);
    
    console.log("alpha length",length);
    for(let i=0;i<length;i++){
        strStack.push(arr[i])
    }
    console.log();
let lengthOPop=strStack.items.length
    for(let i=0;i<lengthOPop;i++){
        console.log(result,i);
        
        result= result+strStack.pop()
    }
    console.log(result,"length");
    
}


reverseString("alpha")