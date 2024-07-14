// arithmetic operations:
const add=(a,b)=>{
console.log("Addition",a+b);
}
const sub=(a,b)=>{
    console.log("subtraction",a-b);

}
const mult=(a,b)=>{
    console.log("multiplication", a*b);
}
const divide=(a,b)=>{
    console.log("division",a/b);

}
const reminder=(a,b)=>{
    console.log("remainder", a%b);
}


add(1,2);
sub(4,2)
mult(3,2);
divide(4,2);
reminder(10,2);

//assignment
let a=10;
console.log(a+=1);
// let b=20;
console.log(a-=2);

//comparision
console.log(10>2);
console.log(10<2);
console.log(10>=10);
console.log(5<=10);
console.log(2=="2");
console.log(2==="2");


//logical operator

console.log('True && False',10<11 && 12>14);
console.log('True || False',10<11 || 12>14);
console.log(!true);


//ternary operator
console.log(10>2?true:false);