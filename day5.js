//write a function to check if the no is odd/even and log the result to console

function evenOrAdd(num){
(num%2==0)?console.log("even"):console.log("odd");
}

evenOrAdd(11);

//square of a number
function square(num){
return num*num;
}

const squareResult=square(3);
console.log(squareResult);


//max of 2 numbers
function max2Numbers(a,b){
    a>b?console.log(`${a} is greater than ${b}`): console.log(`${b} is greater than ${a}`)
}

max2Numbers(2,3)

//concat two strings

function concat2Strings(str1, str2){
    return str1.toString()+str2.toString()
}

const concatResult= concat2Strings("kaus","hik");
const concatResul1t= concat2Strings(1,2);

console.log(concatResult,concatResul1t);

//sum of 2 numbers
const sum2Numbers=(num1,num2)=>{
    return num1+num2
}

const sumResult=sum2Numbers(1,2)
console.log(sumResult);


//check specific character

const findSpecificCharacter =(character,ch)=>{
return character.toString().includes(ch.toString())
}

const specificResult=findSpecificCharacter("hello",1);
console.log(specificResult);


//product of 2 values set default parameter //understanding of  default param: if you give some parameter it will take that param or else it will take the default value

function product(a,b=1){
    console.log("a,b",a , b);
    return a*b;
}
console.log(product(10));

//return greetings name based on persons name, age 

function greet(name, age=27){
    return `Hi ${name}, how have you been ive seen you ${age} years ago`
}
console.log(greet("santa",10));


//higher order functions:
//Higher order functions ar the functions that either do one of the following. It either takes one functionas a parameter or it returns a function
//eg:map,filter, reduce
// eg: function HOC(sampleFunction){
//     sampleFunction();
// }

// or
// function HOC(sampleFunction){
//     return sampleFunction();
// }

//write a hoc that takes 2 params, on is cann back function, no of times it should be called

function higherOrderFunction(functionName,times){
    for(i=0;i<times;i++){
        functionName()
    }

}


function callingFunction(){
    console.log("Anna Namaste");
}

console.log(higherOrderFunction(callingFunction,5))


//hoc to take 2 functions and a value, applies the first function to the value and then apply the second function to the reuslt

function higherOrderFunction2(fun1,fun2,val){

    let firstValue= fun1(val);
    return result= fun2(firstValue);

}


function fun1(value){

    return value*5

}

function fun2(value){
    return value/5
}

console.log(higherOrderFunction2(fun1,fun2,10));